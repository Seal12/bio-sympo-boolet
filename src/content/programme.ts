/**
 * Full-day programme for Monday, 31 August 2026.
 * Sourced from the final programme booklet.
 */
export type TalkSlot = {
  time: string;
  title: string;
  presenter?: string;
};

export type ParallelTrack = {
  id: string;
  label: string;
  focus: string;
  facilitator: string;
  coFacilitator: string;
  venue: string;
  talks: TalkSlot[];
};

export type ProgrammeBlock =
  | {
      kind: "single";
      time: string;
      title: string;
      detail?: string;
      venue?: string;
      link?: string;
    }
  | {
      kind: "parallel";
      time: string;
      title: string;
      tracks: ParallelTrack[];
    }
  | {
      kind: "flash";
      time: string;
      title: string;
      chairs: string;
      talks: TalkSlot[];
    };

export const programmeMeta = {
  dayLabel: "Monday, 31 August 2026",
  theme: "African Genomes in the Global Village: Landscapes to celebrate diversity",
} as const;

const domeVenue = "Digital Dome and Teaching";

export const programme: ProgrammeBlock[] = [
  {
    kind: "single",
    time: "08:00 – 09:00",
    title: "Registration / Login",
    link: "Link: TBC",
  },
  {
    kind: "single",
    time: "09:00 – 09:10",
    title: "Welcome and housekeeping",
    detail: "Caivil Ndobela, President of SASBi-SC",
  },
  {
    kind: "single",
    time: "09:10 – 09:45",
    title:
      "Opening Keynote: Never Stop Evolving: Lessons from a Life in Bioinformatics",
    detail: "Dr Rian Pierneef, President of the South African Society for Bioinformatics",
    venue: domeVenue,
  },
  {
    kind: "parallel",
    time: "09:45 – 10:30",
    title: "Session 1: Oral Presentations",
    tracks: [
      {
        id: "1a",
        label: "Session 1A: Human Landscapes",
        focus:
          "Population Genomics, Immunity, and health diversity — Population-level genetic diversity, host-immune responses, and molecular signatures associated with infectious disease susceptibility",
        facilitator: "Nozipho Magagula",
        coFacilitator: "Odireleng Mosuwe",
        venue: domeVenue,
        talks: [
          {
            time: "09:45 – 10:00",
            title:
              "Phylogenetic age is associated with mitochondrial heteroplasmy in African and diaspora populations",
            presenter: "Dayna Adrienne Croock",
          },
          {
            time: "10:00 – 10:15",
            title:
              "CCR5 regulatory variants and novel loci associated with susceptibility to HIV-1 infection in Sub-Saharan African populations",
            presenter: "Isabel du Randt",
          },
          {
            time: "10:15 – 10:30",
            title:
              "Sex-Specific Gene Expression Signatures as Biomarkers in predicting Tuberculosis Relapse",
            presenter: "Bongani Mnyandli",
          },
        ],
      },
      {
        id: "1b",
        label: "Session 1B: Pathogen Landscapes",
        focus:
          "Host-Pathogen Interactions, Infectious Disease, and Genomic Diversity — Molecular and genomic approaches to understanding host–pathogen interactions, pathogen diversity, and mechanisms underlying infectious disease",
        facilitator: "Sandile Ntloko",
        coFacilitator: "Thulani Nkosi",
        venue: "Training laboratory",
        talks: [
          {
            time: "09:45 – 10:00",
            title:
              "Characterisation of the Subcellular Localisation of African Horse Sickness Virus Non-structural Protein NS5",
            presenter: "Nipho Mtambo",
          },
          {
            time: "10:00 – 10:15",
            title:
              "Genetic Diversity of Ehrlichia ruminantium Based on Multilocus Sequence Typing of Isolates from Indigenous Goats and Amblyomma hebraeum Ticks",
            presenter: "Xolile Nuse",
          },
          {
            time: "10:15 – 10:30",
            title:
              "Transcriptomic Characterisation of Differentiation-driven Priming of the Interferon-α Response in THP-1 macrophages",
            presenter: "Boithuso Phale",
          },
        ],
      },
    ],
  },
  {
    kind: "single",
    time: "10:30 – 10:50",
    title: "Tea Break",
  },
  {
    kind: "single",
    time: "10:55 – 11:55",
    title: "Panel discussion: Building an inclusive and equitable bioinformatics ecosystem",
    detail:
      "Session Chair: Joshua Sampson, President of the SAGS-Student Society. Panel: Prof. Scott Hazelhurst (WITS), Prof. Özlem Tastan-Bishop (RU), Lebogang Siviya (NMU), Mr. Siyanda Mazibuko (NMU), Prof. Carminita Frost (NMU)",
    venue: domeVenue,
    link: "Link: TBC",
  },
  {
    kind: "single",
    time: "11:55 – 12:05",
    title: "Picture Moment",
    detail: "#BIO26inNMU #Bioinformatics #Genetics",
  },
  {
    kind: "single",
    time: "12:05 – 12:50",
    title: "Lunch",
  },
  {
    kind: "parallel",
    time: "12:50 – 13:50",
    title: "Session 2: Oral Presentations",
    tracks: [
      {
        id: "2a",
        label: "Session 2A: Computation Landscapes",
        focus:
          "Machine Learning, Bioinformatic Pipelines, and Data Discovery — Advanced algorithmic approaches, neural networks, automated screening workflows, and sequence classifiers applied to oncology and genomic tracking",
        facilitator: "Sandile Ntloko",
        coFacilitator: "Odireleng Mosuwe",
        venue: domeVenue,
        talks: [
          {
            time: "12:50 – 13:05",
            title:
              "Graph Neural Network-Based Discovery of miRNA-mRNA Regulatory Interactions in Breast Cancer",
            presenter: "Nothando Gama",
          },
          {
            time: "13:05 – 13:20",
            title:
              "Reconstructing Cervical Cancer Tumour Microenvironment States from DNA Methylation Profiles Using a Machine Learning Framework",
            presenter: "Saltiel Hamese",
          },
          {
            time: "13:20 – 13:35",
            title:
              "DockVina: An Automated Molecular Docking Pipeline for High Throughput Virtual Screening",
            presenter: "Siphamandla Mnakekeli Dlamini",
          },
          {
            time: "13:35 – 13:50",
            title:
              "Taxonomic Binning of Long-Read DNA Sequences by K-mer Composition using Decision Tree Classifiers",
            presenter: "Bruhan Kyomuhendo",
          },
        ],
      },
      {
        id: "2b",
        label: "Session 2B: Ecological Landscapes",
        focus:
          "Wildlife conservation, Environmental Health, and Ecosystem Diversity — Tracking diversity across diverse biomes, spanning African wildlife conservation, river systems, aquaculture and agricultural ecology",
        facilitator: "Thulani Nkosi",
        coFacilitator: "Nozipho Magagula",
        venue: domeVenue,
        talks: [
          {
            time: "12:50 – 13:05",
            title:
              "Surveillance and Monitoring of Antimicrobial-Resistant Human Pathogenic and Zoonotic Bacteria in the Ngamiland and Okavango Delta",
            presenter: "Patience Motshosi",
          },
          {
            time: "13:05 – 13:20",
            title:
              "Temporal Dynamics of the Gut Microbiome During Smoltification in Atlantic Salmon (Salmo salar)",
            presenter: "Muktaar Badrorin",
          },
          {
            time: "13:20 – 13:35",
            title:
              "Unravelling the Elusive Mating Strategy of Dematophora necatrix: A Combined Genomic and Physiological Approach",
            presenter: "Annabel Norval",
          },
        ],
      },
    ],
  },
  {
    kind: "single",
    time: "13:50 – 14:00",
    title: "Comfort Break",
  },
  {
    kind: "flash",
    time: "14:00 – 15:00",
    title: "Session 3: Flash talks",
    chairs:
      "Session chairs: Joshua Sampson, President of SAGS SC and Sandile Ntloko, Deputy Development of SASBi-SC · Facilitators: Odireleng Mosuwe and Caivil Ndobela · Wrap-up chair: Nozipho Magagula, Deputy Secretary & Treasurer of SASBi-SC",
    talks: [
      {
        time: "14:00 – 14:07",
        title:
          "Advancing avian genomics: A de novo assembly pipeline to generate a high-quality reference genome for the Southern Bald Ibis (Geronticus calvus)",
        presenter: "Ashley Colleen Mortimer",
      },
      {
        time: "14:07 – 14:14",
        title:
          "Does multi-task supervision teach a classifier where to look? A quantitative attention-localization study in brain tumor MRI",
        presenter: "Tisetso Letuka",
      },
      {
        time: "14:14 – 14:21",
        title:
          "The Role of the Gut Microbiome in Inflammation and Multimorbidity in African Populations: Evidence from AWI-GEN",
        presenter: "Aaron Berkman",
      },
      {
        time: "14:21 – 14:28",
        title:
          "Impact of Reference Genome, Alignment Strategy, and Quantification Method on Locus-Specific Human Endogenous Retrovirus (HERV) Detection During Monocyte-to-Macrophage Differentiation",
        presenter: "Tebogo Phago",
      },
      {
        time: "14:28 – 14:35",
        title:
          "Integrated Phenotypic Profiling and Therapeutic Target Prioritization of Clinical Multidrug-Resistant Pseudomonas aeruginosa Exhibiting Biofilm-Driven Persistence",
        presenter: "Sinethemba Yakobi",
      },
      {
        time: "14:35 – 14:42",
        title:
          "Benchmarking DNBSEQ-T7 Sequencing Performance Using Genome in a Bottle Reference Genomes: Impact of Library Preparation Strategies",
        presenter: "Maano Malima",
      },
      {
        time: "14:42 – 15:00",
        title: "Session Wrap Up Q&A",
      },
    ],
  },
  {
    kind: "single",
    time: "15:00 – 15:30",
    title:
      "Closing Keynote: Building the Future of African Bioinformatics: Innovation, Collaboration, and Impact",
    detail:
      "Prof Nicola Mulder — Head of CBIO, UCT; Principal investigator of H3ABioNet; ABI Founding member",
    venue: domeVenue,
    link: "Link: TBC",
  },
  {
    kind: "single",
    time: "15:30 – 15:50",
    title: "Sponsor talk: Diplomics",
  },
  {
    kind: "single",
    time: "15:50 – 16:30",
    title: "Prize Giving",
  },
  {
    kind: "parallel",
    time: "16:30 – 17:00",
    title: "Annual General Meetings",
    tracks: [
      {
        id: "agm-sasbi",
        label: "AGM SASBi",
        focus: "Annual general meeting",
        facilitator: "Caivil Ndobela, President of SASBi SC",
        coFacilitator: "—",
        venue: "Auditorium 1",
        talks: [],
      },
      {
        id: "agm-sags",
        label: "AGM SAGS",
        focus: "Annual general meeting",
        facilitator: "Joshua Sampson, President of SAGS SC",
        coFacilitator: "—",
        venue: "Auditorium 2",
        talks: [],
      },
    ],
  },
];
