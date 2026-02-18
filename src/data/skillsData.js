export const SKILL_CATEGORIES = [
  {
    id: 'ml-dl',
    title: 'ML/DL',
    skills: [
      { name: 'PyTorch', level: 92, tooltip: 'Model training, custom layers, distributed training' },
      { name: 'TensorFlow', level: 85, tooltip: 'Keras API, TF Serving, SavedModel' },
      { name: 'Scikit-learn', level: 95, tooltip: 'Pipelines, model selection, preprocessing' },
      { name: 'XGBoost / LightGBM', level: 90, tooltip: 'Tabular ML, hyperparameter tuning' },
      { name: 'OpenCV', level: 78, tooltip: 'Image preprocessing, detection, augmentation' },
    ],
  },
  {
    id: 'nlp-llm',
    title: 'NLP/LLM',
    skills: [
      { name: 'Hugging Face', level: 88, tooltip: 'Transformers, tokenizers, pipelines' },
      { name: 'LangChain', level: 82, tooltip: 'RAG, agents, chain orchestration' },
      { name: 'OpenAI / LLM APIs', level: 85, tooltip: 'GPT, embeddings, fine-tuning' },
      { name: 'spaCy / NLTK', level: 80, tooltip: 'NER, POS, custom pipelines' },
    ],
  },
  {
    id: 'cloud-data',
    title: 'Cloud/Data',
    skills: [
      { name: 'AWS', level: 83, tooltip: 'SageMaker, S3, Lambda, ECS' },
      { name: 'GCP', level: 72, tooltip: 'Vertex AI, BigQuery, Cloud Run' },
      { name: 'Spark / Databricks', level: 78, tooltip: 'ETL, MLlib, Delta Lake' },
      { name: 'Kafka / Streaming', level: 75, tooltip: 'Real-time pipelines, event sourcing' },
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps',
    skills: [
      { name: 'MLflow', level: 88, tooltip: 'Experiment tracking, model registry' },
      { name: 'Docker', level: 90, tooltip: 'Containerization, multi-stage builds' },
      { name: 'Kubernetes', level: 76, tooltip: 'Deployments, Helm, K8s APIs' },
      { name: 'CI/CD', level: 82, tooltip: 'GitHub Actions, model promotion' },
    ],
  },
  {
    id: 'languages-db',
    title: 'Languages/DB',
    skills: [
      { name: 'Python', level: 95, tooltip: 'Production code, async, typing' },
      { name: 'SQL', level: 88, tooltip: 'Analytics, optimization, window functions' },
      { name: 'PostgreSQL / MySQL', level: 82, tooltip: 'Schema design, indexing' },
      { name: 'Git', level: 90, tooltip: 'Workflows, rebase, CI integration' },
    ],
  },
]
