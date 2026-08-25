/**
 * Full-day programme for Monday, 31 August 2026.
 * PDF labelled the ecological parallel track as “Session 2A”; corrected here to Session 2B.
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
    venue: "Auditorium 1",
  },
  {
    kind: "parallel",
    time: "09:45 – 10:45",
    title: "Session 1: Oral Presentations",
    tracks: [
      {
        id: "1a",
        label: "Session 1A: Human Landscapes",
        focus:
          "Population Genomics, Immunity, and health diversity — Cohort genomics, host immune responses, and disease susceptibility within African and diaspora populations",
        facilitator: "Odireleng Mosuwe",
        coFacilitator: "Nozipho Magagula",
        venue: "Auditorium 1",
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
          {
            time: "10:30 – 10:45",
            title:
              "Transcriptomic Characterisation of Differentiation-driven Priming of the Interferon-α Response in THP-1 macrophages",
            presenter: "Boithuso Phale",
          },
        ],
      },
      {
        id: "1b",
        label: "Session 1B: Pathogen Landscapes",
        focus:
          "Vector Biology, Host-Parasite Dynamics, and Veterinary Genomics — Surveillance of agricultural, veterinary, and vector-borne pathogens alongside innovative biological and chemical control methods",
        facilitator: "OC Member",
        coFacilitator: "OC Member",
        venue: "Auditorium 2",
        talks: [
          {
            time: "09:45 – 10:00",
            title:
              "Characterisation of the Subcellular Localisation of African Horse Sickness Virus Non-structural Protein NS5",
            presenter: "Nhlakanipho Mtambo",
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
              "Genomic Surveillance of Trehalose-6-Phosphate Synthase in Anopheles gambiae: A Promising target for Next-Generation Insecticides",
            presenter: "Mercy Bella-Omunagbe",
          },
          {
            time: "10:30 – 10:45",
            title:
              "Isolation and Characterization of Biocide Producing Fungus Against Anopheles Mosquitoes from Pesticide Factory Effluents",
            presenter: "Tariku Feyisa Wakjira",
          },
        ],
      },
    ],
  },
  {
    kind: "single",
    time: "10:45 – 11:10",
    title: "Tea Break",
  },
  {
    kind: "single",
    time: "11:15 – 12:15",
    title: "Panel discussion: Building an inclusive and equitable bioinformatics ecosystem",
    detail:
      "Session Chair: Joshua Sampson, President of the SAGS-Student Society. Panel: Prof. Scott Hazelhurst, Prof. Özlem Tastan-Bishop, Lebogang Siviya, Mr. Siyanda Mazibuko, Prof. Carminita Frost",
    venue: "Auditorium 1",
    link: "Link: TBC",
  },
  {
    kind: "single",
    time: "12:15 – 13:25",
    title: "Picture Moment",
    detail: "#BIO26inNMU #Bioinformatics #Genetics",
  },
  {
    kind: "single",
    time: "12:25 – 13:10",
    title: "Lunch",
  },
  {
    kind: "parallel",
    time: "13:15 – 14:15",
    title: "Session 2: Oral Presentations",
    tracks: [
      {
        id: "2a",
        label: "Session 2A: Computation Landscapes",
        focus:
          "Machine Learning, Bioinformatic Pipelines, and Data Discovery — Advanced algorithmic approaches, neural networks, automated screening workflows, and sequence classifiers applied to oncology and genomic tracking",
        facilitator: "Odireleng Mosuwe",
        coFacilitator: "OC member",
        venue: "Auditorium 1",
        talks: [
          {
            time: "13:15 – 13:30",
            title:
              "Graph Neural Network-Based Discovery of miRNA-mRNA Regulatory Interactions in Breast Cancer",
            presenter: "Nothando Gama",
          },
          {
            time: "13:30 – 13:45",
            title:
              "Reconstructing Cervical Cancer Tumour Microenvironment States from DNA Methylation Profiles Using a Machine Learning Framework",
            presenter: "Saltiel Hamese",
          },
          {
            time: "13:45 – 14:00",
            title:
              "DockVina: An Automated Molecular Docking Pipeline for High Throughput Virtual Screening",
            presenter: "Siphamandla Mnakekeli Dlamini",
          },
          {
            time: "14:00 – 14:15",
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
        facilitator: "Caivil Ndobela",
        coFacilitator: "Nozipho Magagula",
        venue: "Auditorium 2",
        talks: [
          {
            time: "13:15 – 13:30",
            title:
              "AMR in Freshwater Environments of the Okavango Delta and Ngamiland Regions",
            presenter: "Patience Motshosi",
          },
          {
            time: "13:30 – 13:45",
            title:
              "Assessing the Genetic Diversity and Structure of Spotted Hyena (Crocuta crocuta) populations across Africa",
            presenter: "Kagisho Dibakoane",
          },
          {
            time: "13:45 – 14:00",
            title:
              "Temporal Dynamics of the Gut Microbiome During Smoltification in Atlantic Salmon (Salmo salar)",
            presenter: "Muktaar Badrorin",
          },
          {
            time: "14:00 – 14:15",
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
    time: "14:15 – 14:25",
    title: "Tea Break",
  },
  {
    kind: "flash",
    time: "14:30 – 15:30",
    title: "Session 3: Flash talks",
    chairs:
      "Joshua Sampson, President of SAGS SC and Sandile Ntloko, Deputy Development of SASBi-SC · Wrap-up chair: Nozipho Magagula",
    talks: [
      {
        time: "14:30 – 14:37",
        title:
          "Advancing avian genomics: A de novo assembly pipeline to generate a high-quality reference genome for the Southern Bald Ibis (Geronticus calvus)",
        presenter: "Ashley Colleen Mortimer",
      },
      {
        time: "14:37 – 14:44",
        title:
          "An Immunoinformatics Approach for Cross-Species Diagnostics: Validating a Fasciola gigantica Surrogate Antigen for Schistosoma haematobium Detection",
        presenter: "Adedayo Adesida",
      },
      {
        time: "14:44 – 14:51",
        title:
          "Comparative in silico prediction and characterisation of secondary metabolites of Exserohilum turcicum and Exserohilum rostratum",
        presenter: "Catherina Kuetezang",
      },
      {
        time: "14:51 – 14:58",
        title:
          "Does multi-task supervision teach a classifier where to look? A quantitative attention-localization study in brain tumor MRI",
        presenter: "Tisetso Letuka",
      },
      {
        time: "14:58 – 15:05",
        title:
          "The Role of the Gut Microbiome in Inflammation and Multimorbidity in African Populations: Evidence from AWI-GEN",
        presenter: "Aaron Berkman",
      },
      {
        time: "15:05 – 15:12",
        title:
          "Impact of Reference Genome, Alignment Strategy, and Quantification Method on Locus-Specific Human Endogenous Retrovirus (HERV) Detection During Monocyte-to-Macrophage Differentiation",
        presenter: "Tebogo Phago",
      },
      {
        time: "15:12 – 15:19",
        title:
          "Integrated Phenotypic Profiling and Therapeutic Target Prioritization of Clinical Multidrug-Resistant Pseudomonas aeruginosa Exhibiting Biofilm-Driven Persistence",
        presenter: "Sinethemba Yakobi",
      },
      {
        time: "15:19 – 15:26",
        title:
          "Benchmarking DNBSEQ-T7 Sequencing Performance Using Genome in a Bottle Reference Genomes: Impact of Library Preparation Strategies",
        presenter: "Maano Malima",
      },
      {
        time: "15:26 – 15:30",
        title: "Session Wrap Up Q&A",
      },
    ],
  },
  {
    kind: "single",
    time: "15:30 – 16:00",
    title:
      "Closing Keynote: Building the Future of African Bioinformatics: Innovation, Collaboration, and Impact",
    detail:
      "Prof Nicola Mulder — Head of CBIO, UCT; Principal investigator of H3ABioNet; ABI Founding member",
    venue: "Auditorium 1",
    link: "Link: TBC",
  },
  {
    kind: "single",
    time: "16:00 – 16:30",
    title: "Sponsors and Prize giving",
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
