import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} id="hero-banner">
      <div className="hero__container">
        <div>
          <h1 className="hero__title"><img src="/img/luvit-logo-white.svg"/></h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className="hero-buttons-container">
        <div>
          <Link
              className="hero-button"
              to="https://github.com/truemedian/luvit-bin/releases/download/2021-08-22/luvit-bin-Windows-x86_64.zip">
              Download for Windows (x64)
            </Link>
            <Link
              className="hero-button"
              to="https://github.com/truemedian/luvit-bin/releases/download/2021-08-22/luvit-bin-Linux-x86_64.tar.gz">
              Download for Linux (x64)
            </Link>
          </div>
          <div>
            <Link
              className="hero-text"
              to="https://github.com/truemedian/luvit-bin/releases/">
                Other Platforms
            </Link>
            <Link
              className="hero-text"
              to="/downloads">
                All Downloads
            </Link>
            <Link
              className="hero-text"
              to="https://github.com/luvit/luvit/blob/master/ChangeLog">
                Changelog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickstartButton() {
  return (
    <div className="hero__container">
      <a className="hero-button hero__quickstart-button" href="/docs/tutorial/getting-started">Get Started in Minutes</a>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickstartButton/>
      </main>
    </Layout>
  );
}
