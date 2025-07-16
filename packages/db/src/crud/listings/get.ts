import { db } from '../../database';
import { Listing, ResultPromise } from '@ophelia/types';
import { tryCatch } from '@ophelia/utils';
import { contentBlocksTable, listingsTable } from '../../schema';
import { eq } from 'drizzle-orm';

type ContentBlocksDto = typeof contentBlocksTable.$inferSelect;
type ListingDto = typeof listingsTable.$inferSelect & {
  contentBlocks: ContentBlocksDto[];
}

export const get = async (id: number): ResultPromise<Listing> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: eq(listingsTable.id, id),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
      },
    })
  );

  console.log(error)

  if (error || !data) {
    return { data: null, error: 'not-found' };
  }

  return {
    data: mapResponse(data),
    error: null,
  }
}

const mapResponse = (listing: ListingDto): Listing => {
  return {
    id: listing.id,
    title: listing.title,
    company: {
      name: listing.company,
      image: listing.favicon,
    },
    description: listing.contentBlocks.map(block => ({
      id: block.id,
      type: block.type,
      content: block.content,
      order: block.order,
    })),
    createdAt: '',
    pageViews: 0,
    applicantsCount: 0,
    badges: listing.badges.split(','),
    status: 'accepting-applications',
    pipeline: {
      all: 0,
      discarded: 0,
      applied: 0,
      interview: 0,
      offer: 0,
    },
  };
} 
