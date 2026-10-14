export type ProjectLink = {
  label: 'GitHub' | 'arXiv' | 'Link';
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
    category: 'Research',
    links: [{ label: 'GitHub', href: 'https://github.com/ElasticWeave/ElasticWeave', primary: true }],
  },
  {
    slug: 'mirage-persistent-kernel',
    title: 'Mirage Persistent Kernel',
    tagline: 'Research intern project at CMU Catalyst Lab.',
    period: 'April – June 2026',
    category: 'Research',
    links: [
      { label: 'GitHub', href: 'https://github.com/mirage-project/mirage', primary: true },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2512.22219' },
    ],
  },
  {
    slug: 'speculative-draft-model',
    title: 'Draft Models for Speculative Decoding',
    category: 'Research',
    affiliation: 'Tencent',
    descriptionHtml:
      'Architectural improvement for the internal disadvantage of DFlash (similar to <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark" target="_blank" rel="noopener noreferrer">DSpark</a>).',
  },
  {
    slug: 'bringing-taurus-to-real-world-tasks',
    title: 'Bringing Taurus to Real World Tasks',
    tagline: 'Interconnect topology exploration under practical workload constraints.',
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
    category: 'Research',
    affiliation: 'Tencent',
  },
  {
    slug: 'fpga-cnn-accelerator',
    title: 'FPGA CNN Accelerator',
    tagline: 'An end-to-end Verilog accelerator for MNIST inference.',
    category: 'Engineering',
    affiliation: 'Course project',
  },
  {
    slug: 'fpga-mips-cpu',
    title: '32-bit MIPS CPU on FPGA',
    tagline: 'a MIPS-based processor',
    category: 'Engineering',
    affiliation: 'Course project',
  },
];
