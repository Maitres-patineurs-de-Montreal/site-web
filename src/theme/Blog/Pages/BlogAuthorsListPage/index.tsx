import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {translateBlogAuthorsListPageTitle} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import type {Props} from '@theme/Blog/Pages/BlogAuthorsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import Author from '@theme/Blog/Components/Author';
import type {AuthorItemProp} from '@docusaurus/plugin-content-blog';
import styles from './styles.module.css';

function AdmonitionItem({ title = 'Attention', content }) {
  return (
    <div className="theme-admonition theme-admonition-warning admonition_xJq3 alert alert--warning">
      <div className="admonitionHeading">
        <span className="admonitionIcon_Rf37">
          <svg viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
            />
          </svg>
        </span>
        {title}
      </div>

      <div
        className="admonitionContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

function AuthorListItem({author}: {author: AuthorItemProp}) {
  return (
    <li className={styles.authorListItem}>
      <Author as="h2" author={author} count={author.count} />
    </li>
  );
}

function ContactPage({authors}: {authors: Props['authors']}) {
  return (
    <section className={clsx('margin-vert--lg', styles.authorsListSection)}>
      <AdmonitionItem
        title="Attention"
        content={`
          <p>
            Nous sommes une très petite équipe de bénévoles...
            Avant de nous contacter, consultez <a href="/website/docs/le-club/">notre documentation</a>:
          </p>
          <ul>
            <li>pour les nouveaux patineurs, la section <a href="/website/docs/category/je-me-lance">"je me lance"</a>;
            </li> <li>pour les inscriptions et tarifs, tout est détaillé dans la <a href="/website/docs/tarifs-et-inscription">page à cet effet</a>;</li>
            <li>pour tout ce qui est annulations et calendrier, la page <a href="/website/docs/tarifs-et-inscription">calendrier</a> est la source par excellence.</li>
          </ul>
        `}
      />

      <h2>Annonces et nouvelles</h2>
      <p>
        La source officielle pour les annonces sera dorénavant <a href="/website/nouvelles">la section "nouvelles" du présent site web</a>.
        L'équipe est présentement en train de tester des applications pour les intéressés à recevoir des notifications lorsque des nouvelles seront publiées.
      </p>

      <h2>Groupe Messenger</h2>
      <p>
        Nous avons un groupe Messenger privé pour communiquer entre membres patineurs.
        Si vous voulez y être ajouté, demandez à un responsable lorsque vous serez avec nous à <a href="/website/docs/arena-maurice-richard">Maurice-Richard</a>.
      </p>

      <h2>Notre équipe</h2>
      <ul>
        {authors.map((author) => (
          <AuthorListItem key={author.key} author={author} />
        ))}
      </ul>
    </section>
  );
}

export default function BlogAuthorsListPage({
  authors,
  sidebar,
}: Props): ReactNode {
  const title: string = translateBlogAuthorsListPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_list" />
      <BlogLayout sidebar={sidebar}>
        <Heading as="h1">{title}</Heading>
        <ContactPage authors={authors} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
