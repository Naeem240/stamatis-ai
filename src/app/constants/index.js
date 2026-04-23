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
  {
    name: "Lucas Lee Stamatis",
    role: "Chief Executive Officer",
    detail: "Serial entrepreneur and SMU-trained finance professional with a track record across private healthcare and pharmacy ventures. Leads Stamatis.AI’s commercial strategy and hospital system partnerships, bringing institutional-grade financial discipline to one of the most capital-intensive sectors in tech.",
    img: "/lucas.png"
  },
  {
    name: "Sajed Khan",
    role: "Co-Founder & CTO",
    detail: "Security architect and CISO with deep expertise in HIPAA compliance, healthcare data infrastructure, and enterprise risk management. Co-inventor of US Patent 19/200,539. Architected Stamatis.AI’s 3-stage probabilistic masking pipeline with security and clinical-grade data integrity built in from the ground up.",
    img: "/sajed.jpeg"
  },
  // { name: "Muhammad H. Mustafa", role: "Lead ML Engineer", detail: "Built the data lake, LLM encoder, and Vast.ai training pipeline.", img: null },
  {
    name: "Dr. Rao K. Ali, MD",
    role: "Chief Medical Officer",
    detail: "Board Certified Interventional Pain Specialist. CEO of Premier Pain Centers across 13 Texas locations.",
    img: null
  },
  {
    name: "Aviraj (Avi) Sinha, PhD",
    role: "Co-Founder & Chief Data Scientist",
    detail: "PhD in AI, machine learning, and quantum computing from Southern Methodist University. Co-inventor of US Patent 19/200,539. Leads the model architecture and validation strategy behind Stamatis.AI’s diagnostic engine — combining classical deep learning with next-generation computational methods to set a new standard for clinical AI performance.",
    img: null
  },
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