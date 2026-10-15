export type ProjectLink = {
  label: 'GitHub' | 'arXiv' | 'Blog' | 'Link';
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  period?: string;
  category: 'Research' | 'Engineering' | 'Applied AI';
  affiliation?: string;
  descriptionHtml?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'elasticweave',
    title: 'ElasticWeave',
    period: '2026 — Present',
    category: 'Research',
    links: [
      { label: 'GitHub', href: 'https://github.com/ElasticWeave/ElasticWeave', primary: true },
      { label: 'Blog', href: '/blog/concurrency-scaling/' },
    ],
  },
  {
    slug: 'mirage-persistent-kernel',
    title: 'Mirage Persistent Kernel',
    tagline: 'Persistent Kernel Method for Inference in GPU',
    period: 'April – June 2026',
    category: 'Research',
    affiliation: 'CMU Catalyst Lab',
    links: [
      { label: 'GitHub', href: 'https://github.com/mirage-project/mirage', primary: true },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2512.22219' },
    ],
  },
  {
    slug: 'speculative-draft-model',
    title: 'Draft Models for Speculative Decoding',
    period: 'Jan 2026 — Present',
    category: 'Research',
    affiliation: 'Tencent',
    descriptionHtml:
      'Architectural improvement for the internal disadvantage of DFlash (similar to <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark" target="_blank" rel="noopener noreferrer">DSpark</a>).',
  },
  {
    slug: 'bringing-taurus-to-real-world-tasks',
    title: 'Bringing Taurus to Real World Tasks',
    tagline: 'Interconnect topology exploration under practical workload constraints.',
    period: 'Jul — Sep 2025',
    category: 'Research',
    affiliation: 'Course Research Project',
    links: [
      {
        label: 'Link',
        href: 'https://app.notion.com/p/muhengli/Bringing-Torus-to-real-world-tasks-2668d6eeb44580c3a099cf0416e78b8b?source=copy_link',
        primary: true,
      },
    ],
  },
  {
    slug: 'olympiad-mcts',
    title: 'MCTS for Olympiad Reasoning',
    tagline: 'Exploring reasoning paths for mathematics and physics problems.',
    period: 'Jul — Sep 2024',
    category: 'Research',
    affiliation: 'Tencent',
  },
  {
    slug: 'fpga-cnn-accelerator',
    title: 'FPGA CNN Accelerator',
    tagline: 'An end-to-end Verilog accelerator for MNIST inference.',
    period: 'Sep 2024 — Jan 2025',
    category: 'Engineering',
    affiliation: 'Course project',
  },
  {
    slug: 'fpga-mips-cpu',
    title: '32-bit MIPS CPU on FPGA',
    tagline: 'a MIPS-based processor',
    period: 'Jul 2024',
    category: 'Engineering',
    affiliation: 'Course project',
  },
];

export const currentProjects = projects.filter((project) => project.period?.includes(String(new Date().getFullYear())));
