import css from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
