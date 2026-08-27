/**
 * Organising committee from the programme booklet.
 */
import { asset } from "@/lib/asset";

export type CommitteeMember = {
  name: string;
  role: string;
  detail: string;
  affiliation: string;
  image: string;
};

export const committee: CommitteeMember[] = [
  {
    name: "Caivil Ndobela",
    role: "Chairperson",
    detail: "President of SASBi Student Council",
    affiliation: "University of Pretoria",
    image: asset("/assets/committee/caivil-n.jpeg"),
  },
  {
    name: "Joshua Sampson",
    role: "Chairperson",
    detail: "President of SAGS Student Society",
    affiliation: "Stellenbosch University",
    image: asset("/assets/committee/joshua-s.jpeg"),
  },
  {
    name: "Odireleng Mosuwe",
    role: "Program",
    detail: "Treasurer of SASBi Student Council",
    affiliation: "University of Pretoria",
    image: asset("/assets/committee/odireleng-m.jpeg"),
  },
  {
    name: "Nozipho Magagula",
    role: "Program, Outreach & Finance",
    detail: "Deputy Secretary & Treasurer of SASBi Student Council",
    affiliation: "University of the Witwatersrand",
    image: asset("/assets/committee/nozipho-m.jpeg"),
  },
  {
    name: "Thulani Nkosi",
    role: "Finance",
    detail: "Development Officer of SASBi Student Council",
    affiliation: "Stellenbosch University",
    image: asset("/assets/committee/thulani-n.jpeg"),
  },
  {
    name: "Yonatan Wolberg",
    role: "Outreach",
    detail: "Media Officer of SASBi Student Council",
    affiliation: "University of the Witwatersrand",
    image: asset("/assets/committee/yanatan-w.jpeg"),
  },
  {
    name: "Sandile Ntloko",
    role: "Design & Outreach",
    detail: "Deputy Development Officer of SASBi Student Council",
    affiliation: "University of Johannesburg",
    image: asset("/assets/committee/sandile-n.jpeg"),
  },
];
