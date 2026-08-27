/**
 * Keynote and panel speaker bios from the booklet.
 */
import { asset } from "@/lib/asset";

export type Speaker = {
  id: string;
  name: string;
  role: "keynote-opening" | "keynote-closing" | "panelist";
  title: string;
  bio: string;
  image: string;
  talkTitle?: string;
  talkAbstract?: string;
};

export const speakers: Speaker[] = [
  {
    id: "rian-pierneef",
    name: "Dr Rian Pierneef",
    role: "keynote-opening",
    title:
      "Senior Lecturer in Genetics and Bioinformatics, University of Pretoria. President of the South African Society for Bioinformatics.",
    image: asset("/assets/speakers/rian-pierneef.png"),
    talkTitle: "Never Stop Evolving: Lessons from a Life in Bioinformatics",
    talkAbstract:
      "Bioinformatics is a field that never stands still and neither can the people working in it. From an unlikely journey into science to a career shaped by constantly evolving technologies, this keynote reflects on the unexpected turns, challenges and opportunities that have shaped one life in bioinformatics. More than a story of where we have come from, it is an invitation to embrace curiosity, adapt to change and never stop evolving.",
    bio: "Dr. Rian Pierneef is a Senior Lecturer in the Department of Biochemistry, Genetics and Microbiology at the University of Pretoria and is affiliated with the Centre for Bioinformatics and Computational Biology (CBCB). His teaching and research focus on bioinformatics, genomics, and computational biology, with particular interests in microbial genomics, metagenomics, transcriptomics, and the development of reproducible bioinformatics workflows for next-generation sequencing data analysis. He is passionate about interdisciplinary research and the application of computational approaches to address challenges in human health, agriculture, and environmental microbiology. Dr. Pierneef is dedicated to mentoring students and advancing bioinformatics education and research in South Africa.",
  },
  {
    id: "nicola-mulder",
    name: "Prof Nicola Mulder",
    role: "keynote-closing",
    title:
      "Head of the Computational Biology Division at the University of Cape Town (UCT).",
    image: asset("/assets/speakers/nicola-mulder.png"),
    talkTitle:
      "Building the Future of African Bioinformatics: Innovation, Collaboration, and Impact",
    talkAbstract:
      "Bioinformatics in Africa has advanced significantly over the last 2 decades. In addition to capacity developed in individual countries, H3ABioNet had an enormous impact, not only for bioinformatics scientists and users within the consortium, but well beyond the project through its novel and wide-reaching training program. This pan African bioinformatics network built data and computing infrastructure, tools and databases, and most importantly, a community of highly skilled bioinformaticians. However, the scientific landscape in Africa and globally is changing, with the increasing generation of complex datasets and the emergence of evermore sophisticated AI techniques. These provide both challenges and opportunities for our next generation of bioinformatics scientists. In this talk, I will reflect on the trajectory of bioinformatics in Africa, what has been achieved, and how we can address the remaining challenges to make the most of the new opportunities. I will also discuss the role of emerging researchers in shaping the future of bioinformatics on the continent.",
    bio: "Prof Mulder heads the Computational Biology Division at UCT. She is PI of the DS-I Africa eLwazi Open Data Science Platform and co-leads a Sickle Cell Disease Data Coordinating Centre and a Wellcome Trust Discovery Data Integration Platform at UCT. She led H3ABioNet, a Pan African Bioinformatics Network which developed bioinformatics capacity to enable genomic data analysis for more than a decade. Her research focuses on genetic determinants of susceptibility to disease, African genome variation, and microbial genomics and infectious diseases. Her group provides bioinformatics services and training and develops new algorithms and resources for African genomics. Prof Mulder is actively involved in capacity development in Bioinformatics and genomics. She also sits on a number of international scientific advisory boards and is currently the interim Director for the African Bioinformatics Institute.",
  },
  {
    id: "carminita-frost",
    name: "Prof Carminita Frost",
    role: "panelist",
    title: "Professor of Biochemistry at Nelson Mandela University.",
    image: asset("/assets/speakers/carminita-frost.png"),
    bio: "Carminita Frost is a Professor of Biochemistry at Nelson Mandela University (NMU, Gqeberha, South Africa) and a scientist in bioprospecting and phytomedicine translation. Specializing in the biochemical evaluation and functional validation of indigenous South African flora, her research platform bridges traditional ethnobotanical knowledge with modern drug discovery. Prof. Frost’s current program focuses on biotech innovation in the medicinal cannabis sector, where her group identifies bioactive pipelines and elucidates their molecular mechanisms of action against chronic metabolic targets, including diabetes and cancer. Notably, her laboratory works on Cannabis sativa, investigating novel, synergistic cannabinoid formulations engineered to induce programmed cell death in breast cancer lines via paraptosis—a unique, non-apoptotic pathway with significant therapeutic potential for overcoming drug resistance. An active leader in the scientific community, Prof. Frost has served on the South African Society of Biochemistry and Molecular Biology (SASBMB) council and maintains a robust network of national and international academic and industry collaborations. The work completed in her group includes publications and she enjoys mentoring the next generation of biotech talent.",
  },
  {
    id: "ozlem-tastan-bishop",
    name: "Prof Özlem Tastan-Bishop",
    role: "panelist",
    title:
      "Full Professor of Structural Bioinformatics at Rhodes University, South Africa, and a Distinguished Adjunct Professor at Saveetha University, Chennai, India.",
    image: asset("/assets/speakers/ozlem-tastan-bishop.png"),
    bio: "She obtained her BSc degree in Physics from Boğaziçi University, Istanbul, Turkey, before completing an MSc in Molecular Biology and Genetics at the same institution. She received her PhD in 2003 from the Max Planck Institute for Molecular Genetics and the Free University of Berlin, Germany. During her doctoral studies, she developed a strong interest in structural biology, which she further pursued through postdoctoral appointments at the University of Texas, USA, the University of the Western Cape, and the University of Pretoria, South Africa. In 2009, Prof. Tastan Bishop joined Rhodes University as an academic staff member. In 2013, she founded the Research Unit in Bioinformatics (RUBi), which has since become a leading research group in structural bioinformatics. Since joining Rhodes University, she has supervised and graduated 29 PhD and 42 MSc students. In recognition of her research excellence, she received the Rhodes University Vice-Chancellor's Distinguished Senior Research Award in 2020 and the South African Society for Bioinformatics (SASBi) Silver Award in 2022. Prof. Tastan Bishop is a Fellow of the Royal Society of South Africa (FRSSAf), where she serves as a Council Member and Eastern Cape Representative. She is also a Member of the Academy of Science of South Africa (MASSAf) and an Associate of the National Institute for Theoretical and Computational Sciences (NITheCS). Her research focuses on structural bioinformatics and its applications to drug discovery and development, including protein allostery, nonsynonymous single nucleotide variants, and integrating artificial intelligence with structural bioinformatics.",
  },
  {
    id: "scott-hazelhurst",
    name: "Prof Scott Hazelhurst",
    role: "panelist",
    title:
      "Professor of Bioinformatics in the School of Electrical and Information Engineering at Wits.",
    image: asset("/assets/speakers/scott-hazelhurst.png"),
    bio: "Scott Hazelhurst is professor of bioinformatics in the School of Electrical & Information Engineering and Senior Scientist at the Sydney Brenner Institute for Molecular Bioscience at the University of the Witwatersrand, Johannesburg. He is Co-PI of the Data Science for Health Discovery and Innovation in Africa MADIVA Research Hub, and a co-investigator on the eLwazi Open Data Science Platform, and collaborated on several H3Africa projects, co-leading the AWI-Gen Microbiome Project. His areas of interests include bioinformatics, health informatics and high performance computing. Scott received his honours and MSc degrees from Wits and his PhD from the University of British Columbia.",
  },
  {
    id: "lebogang-siviya",
    name: "Ms Lebogang Siviya",
    role: "panelist",
    title: "PhD Candidate, Nelson Mandela University.",
    image: asset("/assets/speakers/lebogang-siviya.png"),
    bio: "Lebogang Siviya is a PhD candidate in Botany at Nelson Mandela University, where her research focuses on using multi-omics approaches to understand the molecular responses of sweet potato to abiotic stress. She holds an MSc in Molecular and Cell Biology (with distinction) from the University of the Witwatersrand, where she investigated virus–host interactions in tomatoes. Her work aims to contribute to crop improvement and food security by advancing our understanding of the molecular mechanisms underlying crop adaptations to the environment. Her research interests include plant biology, biotechnology and bioinformatics with a focus on integrating these disciplines to address agricultural challenges. Beyond her research, Lebogang is actively involved in mentoring students in molecular biology, genetics, plant biotechnology and research.",
  },
  {
    id: "siyanda-mazibuko",
    name: "Mr Siyanda Mazibuko",
    role: "panelist",
    title: "Associate Lecturer, Nelson Mandela University.",
    image: asset("/assets/speakers/siyanda-mazibuko.png"),
    bio: "Siyanda Mazibuko is an Associate Lecturer in the Department of Biochemistry and Microbiology at Nelson Mandela University. His MSc research focuses on antimicrobial resistance (AMR) surveillance in wastewater using molecular microbiology, microbial genomics, and bioinformatics. He employs PCR, Sanger sequencing, and Oxford Nanopore sequencing to investigate antimicrobial resistance determinants in clinically relevant bacteria. Prior to his current appointment, Siyanda served as a Postgraduate Scholarship and Ethics Administrator within Nelson Mandela University’s Department of Research Development. He also completed specialised training in digital PCR through the Centre for Epidemic Response and Innovation (CERI) and QIAGEN. In addition to his research, Siyanda teaches undergraduate biochemistry and has been recognised for his research presentations at both university and departmental level, including an award in the university-wide Three Minute Thesis (3MT) competition.",
  },
];

export const keynotes = speakers.filter((s) => s.role.startsWith("keynote"));
export const panelists = speakers.filter((s) => s.role === "panelist");
