import { Section } from '../components/Section'
import { AMCRoadmap } from '../components/AMCRoadmap'

export function AMCPathway() {
  return (
    <Section
      id="amc-pathway"
      title="AMC Pathway to Australian Medical Practice"
      subtitle="Roadmap from AMC exams to registration and practice in Australia."
    >
      <AMCRoadmap />
    </Section>
  )
}
