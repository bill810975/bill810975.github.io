export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: 'Research' | 'Engineering' | 'Applied AI';
  period: string;
  affiliation: string;
  tags: string[];
  description: string;
  details: string[];
  ongoing?: boolean;
  featured?: boolean;
};

// Public summaries are derived from the supplied CV. They do not claim unpublished results.
export const projects: Project[] = [
  {
    slug: '3d-dram-llm-accelerator',
    title: 'LLM Accelerator with 3D DRAM',
    tagline: 'Exploring memory-centric hardware for language model acceleration.',
    category: 'Research',
    period: 'Jan 2025 — Present',
    affiliation: 'ARChip Lab · Tsinghua University',
    tags: ['Computer Architecture', '3D DRAM', 'LLM Inference'],
    description: 'A research project investigating accelerator architectures for large language models, with an emphasis on 3D DRAM.',
    details: [
      'Research focus: large language model accelerator architecture.',
      'Hardware direction: 3D DRAM-based design.',
      'This project is ongoing; detailed results are not published here.'
    ],
    ongoing: true,
    featured: true,
  },
  {
    slug: 'speculative-draft-model',
    title: 'Draft Models for Speculative Decoding',
    tagline: 'Architectures aimed at improving speculative token acceptance length.',
    category: 'Research',
    period: 'Jan 2026 — Present',
    affiliation: 'Tencent · Research Internship',
    tags: ['LLM Serving', 'Speculative Decoding', 'Model Architecture'],
    description: 'Research into draft-model architecture designs that aim to increase the accepted token length in speculative decoding.',
    details: [
      'Research focus: draft-model architectures.',
      'Objective: improve accepted token length in speculative decoding.',
      'This project is ongoing; detailed results are not published here.'
    ],
    ongoing: true,
    featured: true,
  },
  {
    slug: 'mirage-persistent-kernel',
    title: 'Mirage Persistent Kernel',
    tagline: 'Persistent GPU kernel research at CMU Catalyst Lab.',
    category: 'Research',
    period: 'Apr 2026 — Present',
    affiliation: 'Catalyst Lab · Carnegie Mellon University',
    tags: ['GPU', 'Persistent Kernels', 'Systems'],
    description: 'An ongoing research project on Mirage Persistent Kernel at Carnegie Mellon University’s Catalyst Lab.',
    details: [
      'Research topic: persistent GPU kernels.',
      'Research group: Catalyst Lab at Carnegie Mellon University.',
      'This project is ongoing; detailed results are not published here.'
    ],
    ongoing: true,
    featured: true,
  },
  {
    slug: 'torus-noc-topology',
    title: 'Bringing Torus to Real-World Tasks',
    tagline: 'Interconnect topology exploration under practical workload constraints.',
    category: 'Research',
    period: 'Jul — Sep 2025',
    affiliation: 'Course Research Project',
    tags: ['Network-on-Chip', 'Topology', 'PPA'],
    description: 'Studied Torus and Bolza-graph interconnects as candidate Network-on-Chip architectures and evaluated them against real-world workloads.',
    details: [
      'Proposed Torus and Bolza-graph topologies as architecture candidates.',
      'Built a simulator and performance evaluator for real-world workloads.',
      'Conducted power, performance, and area (PPA) analysis.'
    ]
  },
  {
    slug: 'fpga-cnn-accelerator',
    title: 'FPGA CNN Accelerator',
    tagline: 'An end-to-end Verilog accelerator for MNIST inference.',
    category: 'Engineering',
    period: 'Sep 2024 — Jan 2025',
    affiliation: 'Course Engineering Project',
    tags: ['FPGA', 'Verilog', 'CNN'],
    description: 'Designed an end-to-end convolutional neural network accelerator for MNIST handwritten-digit recognition on FPGA.',
    details: [
      'Implemented the hardware with Verilog.',
      'Used separate RAM and buffer structures in the architecture.',
      'Designed a pipelined computation flow.'
    ]
  },
  {
    slug: 'fpga-mips-cpu',
    title: '32-bit MIPS CPU on FPGA',
    tagline: 'Independent implementation of a MIPS-based processor.',
    category: 'Engineering',
    period: 'Jul 2024',
    affiliation: 'Course Engineering Project',
    tags: ['FPGA', 'MIPS', 'Computer Architecture'],
    description: 'Independently designed and implemented a 32-bit MIPS instruction-set computer system on FPGA.',
    details: [
      'Implemented a 32-bit MIPS instruction-set architecture system.',
      'Completed the processor design independently as a core course project.'
    ]
  },
  {
    slug: 'olympiad-mcts',
    title: 'MCTS for Olympiad Reasoning',
    tagline: 'Exploring reasoning paths for mathematics and physics problems.',
    category: 'Applied AI',
    period: 'Jul — Sep 2024',
    affiliation: 'Tencent · Research Internship',
    tags: ['MCTS', 'Reasoning', 'Math & Physics'],
    description: 'Explored methods to improve language-model performance on International Mathematical and Physics Olympiad-style tasks.',
    details: [
      'Introduced Monte Carlo Tree Search (MCTS) to explore candidate solution paths.',
      'Focused on reasoning and search for challenging mathematics and physics tasks.'
    ]
  },
  {
    slug: 'industrial-safety-agent',
    title: 'Industrial Safety Agent System',
    tagline: 'Multimodal workflows and digital twins for factory safety.',
    category: 'Applied AI',
    period: 'Sep — Dec 2025',
    affiliation: 'Entrepreneurial Project',
    tags: ['Agent Systems', 'Computer Vision', 'Digital Twin'],
    description: 'An applied AI project focused on reducing safety incidents and injury risks in industrial environments.',
    details: [
      'Combined computer vision (CV) and vision-language models (VLMs) in an agentic workflow.',
      'Built a digital twin system for factory equipment.',
      'Focused on safety monitoring and accident prevention.'
    ]
  }
];
