export interface Application {
  firstName: string;
  lastName: string;
  email: string;
  resume: File | null;
}

export interface ApplicationAggregate extends Application {
  
}

