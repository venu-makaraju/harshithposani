const FILTERS = ['All', 'NLP', 'ML', 'CV', 'MLOps']

const PROJECTS = [
  {
    id: 'rag-chatbot',
    title: 'Conversational AI RAG Chatbot',
    description: 'Retrieval-augmented generative chatbot with custom knowledge base and citation-backed answers.',
    categories: ['NLP', 'MLOps'],
    techStack: ['LangChain', 'OpenAI', 'FAISS', 'FastAPI', 'Docker'],
    metrics: [
      { value: '92%', label: 'accuracy' },
      { value: '< 2s', label: 'latency' },
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&h=320&fit=crop&q=80',
    demoUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Teams needed a single interface to query internal docs and policies with trustworthy, cited answers instead of generic LLM output.',
      solution: 'Built a RAG pipeline with chunking and embeddings (FAISS), prompt templates, and source citation. Wrapped in FastAPI with streaming and deployed via Docker.',
      results: '92% answer relevance in internal eval; sub-2s P95 latency. Reduced time spent searching docs by ~40% for pilot users.',
    },
  },
  {
    id: 'fraud-detection',
    title: 'Financial Fraud Detection System',
    description: 'Real-time transaction scoring and anomaly detection for card and wire fraud prevention.',
    categories: ['ML', 'MLOps'],
    techStack: ['PyTorch', 'XGBoost', 'Kafka', 'Spark', 'MLflow'],
    metrics: [
      { value: '98.2%', label: 'precision' },
      { value: '96%', label: 'recall' },
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=480&h=320&fit=crop&q=80',
    demoUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'High false positive rate on legacy rules caused operational overhead and delayed genuine transactions.',
      solution: 'Designed a two-stage system: gradient-boosted and neural models for transaction features, plus streaming anomaly scores via Kafka. Retraining and A/B tests managed in MLflow.',
      results: '98.2% precision and 96% recall on holdout; 35% reduction in false positives vs. rules. Deployed in production with sub-100ms scoring.',
    },
  },
  {
    id: 'sentiment-recommendation',
    title: 'Customer Sentiment & Recommendation Engine',
    description: 'Unified pipeline for review sentiment analysis and personalized product recommendations.',
    categories: ['NLP', 'ML'],
    techStack: ['Transformers', 'PyTorch', 'Redis', 'Airflow', 'AWS'],
    metrics: [
      { value: '89%', label: 'sentiment F1' },
      { value: '+12%', label: 'CTR lift' },
    ],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=480&h=320&fit=crop&q=80',
    demoUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Product and support teams lacked a single view of customer sentiment and actionable next-best-action recommendations.',
      solution: 'Fine-tuned transformer for sentiment on reviews; trained recommendation model on interaction data. Combined in a serving layer with Redis caching and Airflow DAGs for daily retrains.',
      results: '89% F1 on sentiment; recommendation model drove +12% CTR in A/B test. Sentiment dashboards used by support and product.',
    },
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Assessment Model',
    description: 'Explainable credit scoring and default probability estimation for underwriting decisions.',
    categories: ['ML'],
    techStack: ['Scikit-learn', 'SHAP', 'Python', 'FastAPI', 'PostgreSQL'],
    metrics: [
      { value: '0.82', label: 'AUC-ROC' },
      { value: 'SHAP', label: 'explainability' },
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=480&h=320&fit=crop&q=80',
    demoUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Underwriters needed both accurate default prediction and clear reasons for model decisions to satisfy compliance.',
      solution: 'Trained gradient boosting and logistic models on historical performance data; integrated SHAP for per-prediction explanations. Exposed via FastAPI with audit logging in PostgreSQL.',
      results: '0.82 AUC-ROC on out-of-time test set. Explainability reports reduced review time per application and passed compliance review.',
    },
  },
]

export { FILTERS, PROJECTS }
