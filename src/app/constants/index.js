export const NAV_LINKS = [
  { label: "Platform", href: "platform" },
  { label: "Team", href: "team" },
  { label: "Investors", href: "investors" },
  { label: "Blog", href: "blog" },
  { label: "Careers", href: "careers" },
];

export const METRICS = [
  { value: "96.47%", label: "Accuracy", sub: "Locus.Brain POC" },
  { value: "99.42%", label: "Sensitivity", sub: "Tumor Detection" },
  { value: "91%", label: "Compute Savings", sub: "vs. Traditional AI" },
  { value: "~15s", label: "Inference Time", sub: "Full 3D MRI Scan" },
];

export const LOCUS_MODULES = [
  { name: "Locus.Brain", diseases: "9 diseases", status: "In Development", color: "#4A90D9", icon: "🧠" },
  { name: "Locus.Heart", diseases: "Cardiac AI", status: "Roadmap", color: "#8899BB", icon: "🫀" },
  { name: "Locus.Lungs", diseases: "Pulmonary AI", status: "Roadmap", color: "#8899BB", icon: "🫁" },
  { name: "Locus.Liver", diseases: "Hepatic AI", status: "Roadmap", color: "#8899BB", icon: "🪵" },
  { name: "Locus.Spine", diseases: "Spinal AI", status: "Roadmap", color: "#8899BB", icon: "🦴" },
  { name: "Locus.Pancreas", diseases: "Pancreatic AI", status: "Roadmap", color: "#8899BB", icon: "🧬" },
];

export const TEAM = [
  { name: "Lucas Lee Stamatis", role: "Chief Executive Officer", detail: "Leads company strategy and commercial rollout across hospital systems." },
  { name: "Sajed Khan", role: "Co-Founder & CTO", detail: "Co-inventor of US Patent 19/200,539. Architect of the 3-stage probabilistic masking pipeline." },
  // { name: "Muhammad H. Mustafa", role: "Lead ML Engineer", detail: "Built the data lake, LLM encoder, and Vast.ai training pipeline." },
  { name: "Dr. Rao K. Ali, MD", role: "Chief Medical Officer", detail: "Board Certified Interventional Pain Specialist. CEO of Premier Pain Centers across 13 Texas locations." },
];

export const INVESTOR_STATS = [
  { label: "Status", value: "Series A", sub: "Funding Round" },
  { label: "IP Portfolio", value: "Patent Pending", sub: "US 19/200,539" },
  // { label: "Partners", value: "Harvard LOA", sub: "Institutional Support" },
];

export const BLOG_POSTS = [
  {
    slug: "probabilistic-masking-ai-compute", // For the URL: /blog/probabilistic-masking-ai-compute
    tag: "Technology",
    title: "How Probabilistic Masking Reduces AI Compute by 91%",
    date: "April 2026",
    // We will pass an image placeholder structure here
    imagePlaceholder: { bg: "bg-medical-blue/20", icon: "⚡" }, 
  },
  {
    slug: "community-hospitals-case-study",
    tag: "Go-to-Market",
    title: "The Case for Starting with Community Hospitals",
    date: "March 2026",
    imagePlaceholder: { bg: "bg-gold/10", icon: "🏥" },
  },
  {
    slug: "detection-vs-diagnosis-matters",
    tag: "Clinical",
    title: "Detection vs. Diagnosis: Why the Distinction Matters",
    date: "March 2026",
    imagePlaceholder: { bg: "bg-medical-green/10", icon: "🩺" },
  },
  {
    slug: "harvard-loa-clinical-validation",
    tag: "Partnerships",
    title: "What Our Harvard LOA Means for Clinical Validation",
    date: "February 2026",
    imagePlaceholder: { bg: "bg-medical-blue/10", icon: "🎓" },
  },
];

export const JOBS = [
  {
    slug: "senior-radiology-ai-researcher",
    title: "Senior Radiology AI Researcher",
    type: "Full-Time",
    location: "Remote",
    department: "Engineering",
    description: "Lead our efforts in refining Locus.Brain diagnostics using advanced probabilistic masking.",
  },
  {
    slug: "clinical-implementation-specialist",
    title: "Clinical Implementation Specialist",
    type: "Full-Time",
    location: "Texas",
    department: "Clinical Operations",
    description: "Bridge the gap between our AI engine and hospital radiology workflows.",
  },
  {
    slug: "healthcare-sales-executive",
    title: "Healthcare Sales Executive",
    type: "Contract",
    location: "Remote",
    department: "Growth",
    description: "Drive adoption of the Stamatis Engine across regional medical centers.",
  },
  {
    slug: "fhir-hl7-integration-engineer",
    title: "FHIR / HL7 Integration Engineer",
    type: "Full-Time",
    location: "Remote",
    department: "Engineering",
    description: "Ensure seamless PACS and EHR integration for surgical precision data.",
  },
];