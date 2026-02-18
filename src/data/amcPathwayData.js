import {
  HiClipboardList,
  HiDocumentText,
  HiAcademicCap,
  HiIdentification,
  HiBadgeCheck,
  HiUserGroup,
  HiStar,
} from 'react-icons/hi'

export const AMC_ROADMAP_STEPS = [
  {
    id: 'mcq',
    title: 'AMC MCQ Exam',
    shortDesc: 'Computer-based multiple-choice examination.',
    detail: 'The AMC Multiple Choice Question (MCQ) exam assesses medical knowledge across core disciplines. It is delivered at Pearson VUE test centres. Preparation typically involves AMC preparation resources and question banks. A pass is required before proceeding to the clinical exam.',
    icon: HiClipboardList,
  },
  {
    id: 'clinical',
    title: 'AMC Clinical Exam',
    shortDesc: 'Objective structured clinical examination (OSCE).',
    detail: 'The AMC Clinical Exam is an OSCE-style assessment of clinical skills, communication, and professional behaviour. It is held in Australia at designated centres. Candidates must have passed the MCQ exam. The exam reflects real-world clinical scenarios and is a key requirement for eligibility for registration.',
    icon: HiDocumentText,
  },
  {
    id: 'english',
    title: 'English Proficiency (IELTS/OET)',
    shortDesc: 'Evidence of English language competency.',
    detail: 'AHPRA requires evidence of English language skills for registration. Accepted tests include IELTS (Academic) and OET (Occupational English Test), with minimum scores set by the Board. Results are typically valid for two years. Exemptions may apply for certain qualifications or primary language instruction.',
    icon: HiAcademicCap,
  },
  {
    id: 'ecfmg',
    title: 'ECFMG / Primary Source Verification',
    shortDesc: 'Verification of qualifications and identity.',
    detail: 'Primary source verification (PSV) confirms your medical degree and identity with the issuing institution. ECFMG EPIC is commonly used for international medical graduates. AHPRA may require EPIC verification or direct verification. This step helps ensure credential integrity for Australian registration.',
    icon: HiIdentification,
  },
  {
    id: 'ahpra',
    title: 'AHPRA Registration',
    shortDesc: 'Application to the national regulator.',
    detail: 'AHPRA (Australian Health Practitioner Regulation Agency) manages registration for health practitioners in Australia. You apply through the Medical Board of Australia. Requirements include passing AMC exams, English proficiency, PSV, and meeting good standing and character criteria. Provisional or general registration may be granted depending on your pathway.',
    icon: HiBadgeCheck,
  },
  {
    id: 'supervised',
    title: 'Supervised Practice',
    shortDesc: 'Period of supervised practice in Australia.',
    detail: 'International medical graduates often complete a period of supervised practice (e.g., under the Standard pathway or as part of specialist assessment). This may include internships or supervised positions in approved settings. The Medical Board sets requirements for supervision and duration before eligibility for general or specialist registration.',
    icon: HiUserGroup,
  },
  {
    id: 'specialist',
    title: 'Specialist Pathway / General Registration',
    shortDesc: 'Full registration or specialist recognition.',
    detail: 'After meeting supervised practice and other requirements, you may apply for general registration with the Medical Board. For specialist recognition, you typically undergo assessment by the relevant specialist college (e.g., RACP, RACS) and then apply for specialist registration. This is the final step to independent practice in Australia.',
    icon: HiStar,
  },
]
