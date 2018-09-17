import styles from './index.css';

export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
      </ul>
      <div>
        <p>alsdfjaldfkjasldfjasflasdj</p>
        <p>alsdfjaldfkjasldfjasflasdj</p>
        <p>alsdfjaldfkjasldfjasflasdj</p>
        <p>alsdfjaldfkjasldfjasflasdj</p>
        <p>alsdfjaldfkjasldfjasflasdj</p>
      </div>
    </div>
  );
}

fetch('/api/users/1').then((response) => {
  console.log(response);
  response.json().then(data => {
    console.log(data);
  });
});
