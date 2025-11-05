'use client';

import Section from '@/components/Section/Section';
import css from './NoteDetails.module.css';

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <Section>
      <p className={css.mid}>Something went wrong: {error.message}</p>
    </Section>
  );
};

export default Error;
