/* ==========================================================================
   YOUR CONTENT — this is the only file you need to edit.
   Everything on the site is generated from the object below.

   Rules:
   - Keep the quotes and commas exactly as they are.
   - To hide a whole section, delete its entries so the list is empty: []
   - Search for TODO — those still need a real value.
   ========================================================================== */

const GH = "https://github.com/laiba-mazhar/";

const DATA = {

  /* --- who you are ------------------------------------------------------ */
  name: "Laiba Mazhar",
  // Small label shown ABOVE your name.
  title: "Data Scientist & ML Researcher",
  tagline: "Data scientist working on trustworthy and diagnosable ML systems.",
  location: "Lahore, Pakistan",

  // Rewrite freely — this is the first thing anyone reads, and your own phrasing
  // will always beat mine. The shape worth keeping: one claim, then the evidence.
  intro: `I work on making machine learning systems diagnosable — knowing not just
    that a model got worse, but which part of the pipeline made it worse. That
    question runs through all of my research: defences against poisoning in
    federated learning, explainable intrusion detection, hallucination control in
    LLM agents, and most recently an exact method for attributing model degradation
    to the individual ETL operators responsible. Alongside the research I build the
    pipelines themselves, currently as a part-time Data Developer and Analyst at
    CloudWorks.`,

  links: {
    email: "lm4442172@gmail.com",
    github: "https://github.com/laiba-mazhar",
    linkedin: "https://www.linkedin.com/in/laiba-mazhar",
    cv: "Laiba_Mazhar_CV.pdf",           // put the PDF next to index.html
    scholar: "",                          // leave "" to hide
  },

  // Profile photo in the hero. Swap the file to change it.
  photo: { src: "photo.jpg", alt: "Laiba Mazhar" },

  /* --- research --------------------------------------------------------- */
  // Be honest about status. "Manuscript in preparation" until it is actually
  // published — a false "peer-reviewed" is the fastest way to lose credibility.
  research: [
    {
      title: "Anchored Counterfactual Attribution of Model Degradation to ETL Pipeline Operators",
      authors: "L. Mazhar, M. Sarfraz",
      year: "2026",
      status: "Manuscript in preparation",
      abstract: `When a production model degrades between two scheduled pipeline runs
        with no code deployed, engineers must determine which operator is responsible.
        We formulate this as a cooperative game over hybrid replays of a fixed pipeline
        across two temporal snapshots, whose Shapley value decomposes the observed
        degradation exactly. We show the standard Shapley value is correct as accounting
        but poor as triage, and introduce the incident-anchored Shapley value, which
        recovers both standard Shapley and leave-one-out ablation as boundary cases.
        On real NYC taxi partitions it reaches 100% top-1 accuracy where leave-one-out
        drops to 50%, while retaining exact decomposition to 3×10⁻¹⁷.`,
      tags: ["Shapley values", "data pipelines", "root cause analysis", "MLOps"],
      links: [
        { label: "Code & paper", url: GH + "culpa-pipeline-attribution" },
      ],
    },
    {
      title: "Adversarial Data Poisoning Detection in Federated Learning via ICS",
      authors: "L. Mazhar",
      year: "2025",
      status: "Manuscript in preparation",
      abstract: `Proposes the Independent Class-wise Coherence Score (ICS), a defense
        against label-flipping and backdoor attacks in federated learning, using MI-FGSM
        adversarial probing and four fused coherence metrics. Across 15 distributed
        clients on MNIST, EMNIST and CIFAR-10, ICS outperforms global-coherence baselines
        by 5–7% accuracy and reduces attack success rate by 30–40%.`,
      tags: ["federated learning", "adversarial ML", "security"],
      links: [
        { label: "Repository", url: GH + "ICS-Federated-Learning-Adversarial-Defense" },
        { label: "Implementation", url: GH + "ICS-Adversarial-Poisoning-Detection" },
      ],
    },
    {
      title: "Robust and Explainable Multiclass Intrusion Detection with XGBoost and SHAP",
      authors: "L. Mazhar",
      year: "2025",
      status: "Manuscript in preparation",
      abstract: `A statistically validated, explainable multiclass intrusion detection
        system combining XGBoost, TreeSHAP and a severity scoring engine for SOC
        deployment, evaluated on NSL-KDD and UNSW-NB15. Achieves 99.90% average accuracy,
        a 12.28% macro-F1 gain over a Random Forest baseline and a 2.44× stability
        improvement across five seeds.`,
      tags: ["explainable AI", "intrusion detection", "XGBoost", "SHAP"],
      links: [
        { label: "Repository", url: GH + "Explainable-XGBoost-Intrusion-Detection-RESEARCH_PAPER" },
      ],
    },
    {
      title: "LLM-Driven Autonomous Trading Agents with Hallucination Mitigation",
      authors: "L. Mazhar",
      year: "2025",
      status: "Manuscript in preparation",
      abstract: `A three-agent pipeline (Analyst, Critic, Decision) built on Llama-3.3-70B
        to mitigate hallucination in financial reasoning over real-time market data. The
        Critic agent emits structured JSON verification reports, achieving an 80%
        recommendation adjustment rate across five major US equities.`,
      tags: ["LLM agents", "hallucination", "multi-agent systems"],
      links: [],
    },
  ],

  /* --- experience ------------------------------------------------------- */
  experience: [
    {
      role: "Senior ML Automation Engineer",
      org: "AiPixal",
      logo: "logos/aipixal.png",           // the glyph only; the wordmark is illegible at 40px
      place: "Johar Town, Lahore — On-site · Full-time",
      period: "Aug 2026 — Present",
      points: [],                          // TODO add two or three lines of what you do here
      stack: [],                           // TODO the tools you actually use there
    },
    {
      role: "Data Developer & Analyst",
      org: "CloudWorks",
      logo: "logos/cloudworks.png",
      place: "Texas, USA — Remote",
      period: "Jun 2026 — Present",
      points: [
        `Build and maintain data pipelines and analytics for US healthcare clients.`,
        `Delivered CareFlow, a care-coordination platform with role-based access control,
         HIPAA-compliant data handling and full audit logging.`,
      ],
      stack: ["TypeScript", "React", "Vite", "Hono", "Supabase", "PostgreSQL",
               "Row-level security", "REST APIs", "HIPAA compliance", "Audit logging", "Git"],
    },
    {
      role: "Database Manager",
      org: "Al Muttaqeen Institute",
      logo: "logos/muttaqeen.png",
      place: "Remote",
      period: "Nov 2025 — May 2026",
      points: [
        `Built automated validation, reporting and reconciliation pipelines for
         institutional records, improving cross-departmental accuracy and audit readiness.`,
      ],
      stack: ["Python", "pandas", "SQL", "PostgreSQL", "Data validation", "Reconciliation",
               "Automated reporting", "Scheduling", "Excel"],
    },
    {
      role: "Data Automation Engineering Intern",
      org: "Tashi Technologies Corp",
      logo: "logos/tashi.png",
      place: "Islamabad, Pakistan",
      period: "Jul 2025 — Oct 2025",
      points: [
        `Built ETL workflows and classification/regression pipelines for enterprise automation.`,
        `Integrated AI APIs and deployed models to cloud infrastructure for real-time scoring.`,
      ],
      stack: ["Python", "XGBoost", "scikit-learn", "ETL", "REST APIs", "GCP", "Docker",
               "Model deployment", "AI API integration"],
    },
    {
      role: "Data & AI Engineer",
      org: "Freelance — Fiverr",
      place: "Remote — international clients",
      logo: "logos/fiverr.png",
      period: "Dec 2024 — May 2026",
      points: [
        `Delivered batch and streaming pipelines on GCP and AWS feeding ML models and
         BI dashboards.`,
        `Built LLM prototypes with retrieval-augmented generation and agentic workflows.`,
      ],
      stack: ["Apache Spark", "PySpark", "Kafka", "Airflow", "dbt", "Databricks", "Snowflake",
               "BigQuery", "GCP", "AWS", "LangChain", "RAG", "Power BI", "Docker"],
    },
  ],

  /* --- projects --------------------------------------------------------- */
  // `category` groups them on the page. Add a new category just by typing one.
  projects: [
    {
      name: "CULPA — Pipeline Attribution",
      featured: true,
      category: "Research & machine learning",
      blurb: `Attributes ML model degradation to individual ETL pipeline operators via
        counterfactual hybrid replay and an incident-anchored Shapley value. Output-hash
        pruning turns 2³³ replays into 3 model fits.`,
      stack: ["Python", "Shapley values", "pandas", "LaTeX"],
      url: GH + "culpa-pipeline-attribution",
    },
    {
      name: "NexusPilot",
      featured: true,
      category: "Full-stack & systems",
      blurb: `Final year project. An integrated business platform unifying finance, HR and
        CRM workflows over a 15-entity relational schema, with n8n-driven automation and
        real-time geospatial and WebSocket data streams.`,
      stack: ["Django REST", "Supabase", "n8n", "React"],
      url: "",   // TODO: no public repo yet. Publish it and paste the link here.
    },
    {
      name: "ICS — Federated Learning Defense",
      featured: true,
      category: "Research & machine learning",
      blurb: `Independent Class-wise Coherence Score for detecting adversarial data
        poisoning in federated learning. Class-wise client evaluation with adversarial
        probe samples and selective aggregation to suppress malicious updates.`,
      stack: ["PyTorch", "Federated learning", "Adversarial ML"],
      url: GH + "ICS-Federated-Learning-Adversarial-Defense",
    },
    {
      name: "Explainable XGBoost Intrusion Detection",
      featured: true,
      category: "Research & machine learning",
      blurb: `Robust multiclass intrusion detection using XGBoost and TreeSHAP, with
        multi-seed evaluation, per-alert explainability and severity-aware alert scoring
        for SOC deployment.`,
      stack: ["XGBoost", "SHAP", "Cybersecurity"],
      url: GH + "Explainable-XGBoost-Intrusion-Detection-RESEARCH_PAPER",
    },
    {
      name: "ragforge",
      featured: true,
      category: "Research & machine learning",
      blurb: `Hybrid retrieval combining dense embeddings, BM25 and reciprocal rank fusion —
        measure your RAG instead of guessing. Chroma and Qdrant backends, parameter sweeps
        and a CI regression gate.`,
      stack: ["Python", "RAG", "Chroma", "Qdrant"],
      url: GH + "ragforge",
    },
    {
      name: "English–Urdu Neural Machine Translation",
      featured: true,
      category: "Research & machine learning",
      blurb: `Transformer built from scratch, benchmarked against an LSTM/Bahdanau-attention
        seq2seq baseline on the UMC005 corpus. BPE tokenization, BLEU/ROUGE evaluation.`,
      stack: ["PyTorch", "Transformers", "NLP"],
      url: GH + "Transformer-English-Urdu-Machine-Translation",
    },
    {
      name: "LaunchMind",
      category: "Research & machine learning",
      blurb: `A multi-agent system that runs a micro-startup end to end with no human in
        the loop — idea to GitHub pull request, Slack launch post and cold outreach email.`,
      stack: ["LLM agents", "Python", "Multi-agent"],
      url: GH + "LaunchMind-Autonomous-Micro-Startup-Agent",
    },
    {
      name: "Bagging vs Boosting — Breast Cancer Classification",
      category: "Research & machine learning",
      blurb: `Comparative study of Decision Tree, Bagging, AdaBoost and Random Forest on
        breast cancer classification, with from-scratch ensemble implementations.`,
      stack: ["scikit-learn", "Ensembles"],
      url: GH + "Bagging-vs-Boosting-Breast-Cancer-Classification",
    },
    {
      name: "Airflow E-Commerce Data Pipeline",
      category: "Data engineering & analytics",
      blurb: `End-to-end Apache Airflow pipeline over the Brazilian E-Commerce dataset:
        extraction, preprocessing and analysis DAGs producing scheduled visual reports.`,
      stack: ["Airflow", "Python", "pandas"],
      url: GH + "Comprehensive-Data-Pipeline-with-Apache-Airflow",
    },
    {
      name: "E-Commerce Retail Trends & CLV",
      category: "Data engineering & analytics",
      blurb: `Analysis of global e-commerce trends and their effect on traditional retail,
        including Customer Lifetime Value modelling and what-if pricing analyses.`,
      stack: ["pandas", "CLV modelling", "Analytics"],
      url: GH + "E-commerce-Retail-Trends-Impact-Analysis",
    },
    {
      name: "Iran Airlines — Environmental Analysis",
      category: "Data engineering & analytics",
      blurb: `Tableau analysis of temperature averages, pollutant levels and wind-speed
        trends across nine sheets and three dashboards, covering seasonal and geographic
        variation in air quality.`,
      stack: ["Tableau", "Data visualization"],
      url: GH + "IranAirlineAnalysis-Tableau",
    },
    {
      name: "Maktab — Academy Management System",
      category: "Full-stack & systems",
      blurb: `School management system: student and staff records, timetabling, attendance,
        fees, exams and dashboards, on Supabase Postgres with row-level security.`,
      stack: ["TypeScript", "React", "Supabase", "Tailwind"],
      url: GH + "academy-management-system",
    },
    {
      name: "AI Handwriting Analysis & Author Identification",
      category: "Full-stack & systems",
      blurb: `Flask web application for handwritten text analysis using OCR, ML and NLP —
        author identification, emotion and sentiment analysis, grammar checking and
        plagiarism detection, behind an interactive dashboard and REST APIs.`,
      stack: ["Flask", "OCR", "NLP"],
      url: GH + "AI-Based-Handwriting-Analysis-and-Author-Identification-WebApp",
    },
    {
      name: "Parallel & Distributed Computing",
      category: "Full-stack & systems",
      blurb: `Pthreads, OpenMP and OpenCL implementations: matrix operations, CPU affinity,
        Game of Life, box blur and GPU convolution.`,
      stack: ["C", "OpenMP", "OpenCL"],
      url: GH + "Parallel-and-Distributed-Computing",
    },
    {
      name: "COAL Taxi Dash",
      category: "Full-stack & systems",
      blurb: `A console taxi-driving game written entirely in 32-bit MASM assembly —
        procedural map generation, collision-based scoring, save/load and a file-backed
        leaderboard.`,
      stack: ["x86 Assembly", "Irvine32"],
      url: GH + "COAL-Taxi-Dash",
    },
    {
      name: "Console Guitar Learning System",
      category: "Full-stack & systems",
      blurb: `C++ application combining user management, a tiered guitar-learning
        curriculum and a musical game environment behind a graphical interface.`,
      stack: ["C++", "GUI"],
      url: GH + "Console-Guitar-System-AI",
    },
    {
      name: "Artificial Intelligence Coursework",
      category: "Full-stack & systems",
      blurb: `Rule-based expert systems, Wumpus World, genetic algorithms for parking,
        trading, routing and scheduling optimisation, constraint satisfaction problems and
        minimax adversarial search.`,
      stack: ["Python", "Search", "Genetic algorithms"],
      url: GH + "Artificial-Intelligence-Coursework",
    },
    {
      name: "Data Mining Coursework",
      category: "Full-stack & systems",
      blurb: `Imbalanced classification, SVMs, from-scratch bagging and boosting, time
        series decomposition and sequential pattern mining.`,
      stack: ["Python", "scikit-learn"],
      url: GH + "Data-Mining-Coursework",
    },
    {
      name: "Guerrilla Marketing Campaign — Starbucks",
      category: "Marketing & creative",
      blurb: `Digital Marketing course project: an unconventional, low-budget guerrilla
        campaign built around the Starbucks brand. Awarded Best Guerrilla Marketing with
        a cash prize.`,
      stack: ["Campaign strategy", "Brand positioning", "Creative direction"],
      url: "",
    },
  ],

  /* --- education -------------------------------------------------------- */
  // `logo` is optional. Drop an image into the logos/ folder and point at it,
  // e.g. logo: "logos/fast.png". If it is missing or fails to load, the site
  // falls back to a clean monogram — so nothing ever renders as a broken image.
  education: [
    {
      degree: "BS Data Science",
      org: "FAST National University of Computer and Emerging Sciences",
      place: "Islamabad, Pakistan",
      period: "Aug 2022 — May 2026",
      logo: "logos/fast.png",
      detail: "CGPA 3.12 / 4.00 · Final year project: NexusPilot",
      courses: ["Machine Learning", "Data Mining", "Artificial Intelligence",
                "Parallel & Distributed Computing", "Database Systems", "Statistics",
                "Data Warehousing", "Computer Networks", "Generative AI",
                "Computer Organisation & Assembly Language"],
    },
    {
      degree: "FSc Pre-Engineering",
      org: "Aspire Group of Colleges, Sabzazar",
      logo: "logos/aspire.png",
      place: "Pakistan",
      period: "2019 — 2021",     // add logos/aspire.png to use a real logo
      detail: "1024 / 1100 — 93.09% · 2nd position in college · Fully funded scholarship",
      courses: [],
    },
    {
      degree: "Matriculation (Science)",
      org: "Govt. Girls High School, Umer Block, Allama Iqbal Town",
      place: "Lahore, Pakistan",
      period: "2017 — 2019",
      // The crest belongs to the awarding board, not the school — the school has
      // no published mark of its own.
      logo: "logos/bise-lahore.png",
      detail: "1010 / 1100 — 91.82%, Grade A+ · 1st position in class · Fully funded scholarship · Board of Intermediate & Secondary Education, Lahore",
      courses: [],
    },
  ],

  /* --- skills ----------------------------------------------------------- */
  skills: [
    { group: "Machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost",
        "Predictive modelling", "Churn & CLV modelling", "Demand forecasting",
        "Time-series analysis", "Ensemble methods", "Imbalanced classification",
        "Feature engineering", "Model deployment pipelines"] },
    { group: "Research areas", items: ["Federated learning", "Adversarial ML",
        "Data poisoning defense", "Explainable AI (SHAP / TreeSHAP)", "Shapley values",
        "Causal inference", "Bayesian methods", "Intrusion detection"] },
    { group: "NLP & generative AI", items: ["Transformers", "Seq2seq & attention",
        "BPE tokenization", "BLEU / ROUGE evaluation", "Hugging Face", "LangChain",
        "LLM agents", "Multi-agent systems", "Retrieval-augmented generation",
        "Prompt engineering", "Hallucination mitigation", "OCR"] },
    { group: "Data engineering", items: ["Apache Spark", "PySpark", "Kafka", "Airflow",
        "dbt", "Airbyte", "n8n", "Databricks", "ETL / ELT design",
        "Batch & streaming pipelines", "Data validation & reconciliation",
        "Dimensional modelling"] },
    { group: "Databases & warehousing", items: ["PostgreSQL", "MySQL", "Oracle SQL",
        "MongoDB", "Snowflake", "BigQuery", "Supabase", "Schema design (OLTP & OLAP)"] },
    { group: "Programming", items: ["Python", "SQL", "TypeScript", "JavaScript", "C", "C++",
        "Java", "x86 Assembly (MASM)", "R"] },
    { group: "Cloud & DevOps", items: ["GCP", "AWS", "Docker", "GitHub Actions (CI/CD)",
        "Git & PR workflows", "Cloud model deployment"] },
    { group: "Backend & APIs", items: ["FastAPI", "Django REST Framework", "Flask", "Hono",
        "REST API design", "WebSockets", "Microservice architecture"] },
    { group: "Parallel computing", items: ["Pthreads", "OpenMP", "OpenCL",
        "GPU convolution", "CPU affinity tuning"] },
    { group: "BI & visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn",
        "Dashboard design"] },
    { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML & CSS"] },
    { group: "Tools & practice", items: ["LaTeX", "Jupyter", "Agile collaboration",
        "Reproducible research", "Technical writing"] },
  ],

  /* --- awards ----------------------------------------------------------- */
  awards: [
    { year: "2025", text: "Winner, Big Data Quest Hackathon — DataFest-25, NaSCon" },
    { year: "Nov 2024", text: "Winner, art competition — Deen Fest, FAST-NUCES" },
    { year: "2024", text: "Winner (cash prize), Best Guerrilla Marketing — Digital Marketing course project for the Starbucks brand" },
    { year: "2024", text: "Certificate of Participation, Speed Programming — NaSCon-24, FAST-NUCES" },
    { year: "2024", text: "Award winner, Special Mention — Model United Nations, BUIMUN, Islamabad" },
    { year: "2023", text: "Award winner, Special Mention — Model United Nations, CUIMUN, COMSATS (first MUN)" },
    { year: "2021", text: "Fully funded scholarship — FSc Pre-Engineering, Aspire College" },
    { year: "2021", text: "2nd position in college — FSc Pre-Engineering (1024/1100, 93.09%)" },
    { year: "2019", text: "Fully funded scholarship — Matriculation" },
    { year: "2019", text: "1st position in class — Matriculation (1010/1100, 91.82%)" },
    { year: "2022", text: "Certificate of Appreciation for consistency and persistence — Aspire Group of Colleges, Sabzazar" },
    { year: "2021", text: "Academic distinction shield — Higher Secondary (FSc Pre-Engineering)" },
    { year: "2019", text: "Academic distinction shield — Secondary (Matriculation)" },
  ],


  /* --- certifications, ventures and community --------------------------- */
  // `group` becomes a sub-heading inside the single section.
  activities: [
    { group: "Certifications",
      title: "Machine Learning — Stanford University",
      text: "Andrew Ng's foundational course on Coursera, covering supervised and unsupervised learning, regularisation, model evaluation and the bias-variance trade-off. Completed 2026.",
      url: "" },
    { group: "Certifications",
      title: "Virtual Internship, Python Programming — CodSoft",
      text: "Remote programme building small Python applications against timed briefs, with code review and delivery deadlines. 2024.",
      url: "" },
    { group: "Certifications",
      title: "Virtual Internship, C++ Programming — CodSoft",
      text: "Remote programme covering object-oriented design, data structures and console application development in C++. 2024.",
      url: "" },
    { group: "Certifications",
      title: "Virtual Internship, Java Programming — CodSoft",
      text: "Remote programme covering core Java, object-oriented principles and small application builds. 2024.",
      url: "" },

    { group: "Ventures",
      title: "Founder — Datahelyx",
      text: "A data and AI consultancy offering pipeline engineering, analytics and applied ML to small businesses. Currently building its first client engagements.",
      url: "https://datahelyx.com" },
    { group: "Ventures",
      title: "Founder & artist — Rangrayze",
      text: "An independent gallery for Sufi-inspired calligraphy and canvas work. I handle the creative production, commissions, client relationships and all digital marketing.",
      url: "https://www.instagram.com/rangrayze/" },
    { group: "Ventures",
      title: "Founder — airRTH",
      text: "A community climate initiative running sustainability awareness campaigns and environmental action programmes at neighbourhood level. Still in its missionary phase — building awareness and volunteer participation before formal programmes launch.",
      url: "" },

    { group: "Volunteer & community",
      title: "Donation Officer — Rah-e-Haq (NGO)",
      text: "Nov 2023 – Apr 2025. Maintained structured donation and financial records for the organisation, coordinated cross-team deliverables and ensured full accountability of every transaction.",
      url: "https://rah-e-haq.org/" },
    { group: "Volunteer & community",
      title: "Head of Investigations — Baitulnoor",
      text: "1.5 years. Led verification and investigation processes across multiple aid cases, documenting findings into clear, actionable reports for stakeholder review.",
      url: "" },
    { group: "Volunteer & community",
      title: "Event Organizer — NaSCon, FAST-NUCES",
      text: "Accommodation team for the national student convention, coordinating lodging and on-site logistics for visiting delegations from universities across Pakistan.",
      url: "" },
    { group: "Volunteer & community",
      title: "Model United Nations — CUIMUN, COMSATS (2023)",
      text: "Award winner, Special Mention at my first Model United Nations conference, debating in committee against delegates from across the country.",
      url: "" },
    { group: "Volunteer & community",
      title: "Model United Nations — BUIMUN, Islamabad (2024)",
      text: "Award winner, Special Mention. Second national conference, representing an assigned delegation through resolution drafting and floor debate.",
      url: "" },
    { group: "Volunteer & community",
      title: "Inter-college sport — badminton and three medals",
      text: "Played inter-college badminton, and medalled in three inter-college races: the apple-eating race, the matka race (running while balancing a clay pot), and the spoon-and-ball race (balancing a ball on a spoon held in the mouth).",
      url: "" },
  ],

  /* --- interests & languages -------------------------------------------- */
  interests: [
    "Trustworthy and diagnosable ML systems",
    "Data engineering for AI",
    "Distributed systems",
    "Federated learning and privacy",
    "Explainable AI",
    "LLM agents",
    "Open-source ML tooling",
    "Sufi calligraphy and canvas art",
    "Climate advocacy",
    "Competitive debate",
  ],

  languages: [
    { name: "English", level: "Fluent — professional working proficiency" },
    { name: "Urdu",    level: "Native" },
    { name: "German",  level: "Basic — conversational" },
    { name: "Arabic",  level: "Basic — reading and writing" },
  ],
};
