import { Section } from '../components/Section'
import { SkillsDashboard } from '../components/SkillsDashboard'

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with."
    >
      <SkillsDashboard />
    </Section>
  )
}
