import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Calendrier',
    description: (
      <>
        Consultez l'horaire prévu en date d'aujourd'hui
      </>
    ),
    link: '/docs/calendrier'
  },
  {
    title: 'Inscription',
    description: (
      <>
        Très simple, ce sera fait en moins de 15 minutes!
      </>
    ),
    link: '/docs/inscription'
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <ThemedImage className={styles.logo} alt="Logo" sources={{
            light: useBaseUrl('/img/logo.svg'),
            dark: useBaseUrl('/img/logo-dark.svg'),
        }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p><a href={link}>{description}</a></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
