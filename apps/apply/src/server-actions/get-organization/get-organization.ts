import { Organization } from "@ophelia/types"

export const getOrganization = async (): Promise<Organization> => {
  return {
    name: 'Meta',
    hue: 213,
    logo: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    rounding: true,
  }
}
