/**
 * Organising committee — photos were not available as clear headshots in the PDF;
 * the UI uses initials avatars.
 */
export type CommitteeMember = {
  name: string;
  role: string;
  detail: string;
  affiliation: string;
  initials: string;
};

export const committee: CommitteeMember[] = [
  {
    name: "Caivil Ndobela",
    role: "Chairperson",
    detail: "President of SASBi Student Council",
    affiliation: "University of Pretoria",
    initials: "CN",
  },
  {
    name: "Joshua Sampson",
    role: "Chairperson",
    detail: "President of SAGS Student Society",
    affiliation: "Stellenbosch University",
    initials: "JS",
  },
  {
    name: "Odireleng Mosuwe",
    role: "Program",
    detail: "Treasurer of SASBi Student Council",
    affiliation: "University of Pretoria",
    initials: "OM",
  },
  {
    name: "Nozipho Magagula",
    role: "Program, Outreach & Finance",
    detail: "Treasurer of SASBi Student Council",
    affiliation: "University of the Witwatersrand",
    initials: "NM",
  },
  {
    name: "Thulani Nkosi",
    role: "Finance",
    detail: "Development Officer of SASBi Student Council",
    affiliation: "Stellenbosch University",
    initials: "TN",
  },
  {
    name: "Sandile Ntloko",
    role: "Design & Outreach",
    detail: "Deputy Development Officer of SASBi Student Council",
    affiliation: "University of Johannesburg",
    initials: "SN",
  },
  {
    name: "Yonatan Wolberg",
    role: "Outreach",
    detail: "Media Officer of SASBi Student Council",
    affiliation: "University of the Witwatersrand",
    initials: "YW",
  },
];
