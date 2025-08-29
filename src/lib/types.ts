export type Job = {
  id: string;
  title: string;
  specialty: string;
  employer: {
    name: string;
    logoUrl?: string;
    isVerified: boolean;
  };
  location: string;
  date: string;
  payRate: number;
  skills: string[];
};
