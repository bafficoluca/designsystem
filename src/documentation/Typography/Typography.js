import React from 'react';
import Text from '../../components/Text';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';

const list = [
  { kind: 'simple', heading: 'Ordered lists' },
  { kind: 'unordered', heading: 'Bullet lists' },
  { kind: 'ordered', heading: 'Ordered lists' },
];

const Normaltext = [
  { kind: 'p', text: 'Body copy, paragraph', styling: '16px, Regular' },
  { kind: 'p', text: 'Label (form)', styling: '14px, SemiBold' },
  { kind: 'code', text: 'Code', styling: 'Monospace, 16px, Regular' },
  { kind: 'sup', text: 'Sup', styling: '11px, Regular' },
  { kind: 'p', text: 'Inline highlight', styling: '14px, SemiBold' },
];
const colors = [
  { color: '#031C2D', text: '#text-01' },
  { color: '#5A6872', text: '#text-02' },
  { color: '#DFE6EB', text: '#text-03' },
];

const headingText = [
  { kind: 'h1', text: 'Heading 1', styling: '29px, SemiBold' },
  { kind: 'h2', text: 'Heading 2', styling: '25px, SemiBold' },
  { kind: 'h3', text: 'Heading 3', styling: '22px, SemiBold' },
  { kind: 'h4', text: 'Heading 4', styling: '20px, SemiBold' },
  { kind: 'h5', text: 'Heading 5', styling: '18px, SemiBold' },
  { kind: 'h6', text: 'Heading 6', styling: '16px, SemiBold' },
];

const emphasisText = [
  { kind: 'strong', text: 'Bold', styling: '16px, Bold' },
  { kind: 'bold', text: 'SemiBold', styling: '16px, SemiBold' },
  { kind: 'i', text: 'Italic', styling: '16px, Italic' },
];

const Typography = () => {
  return (
    <>
      <h3>Headings</h3>
      <p>Typographic scale when using headings in text component</p>
      <div className="wfp--card-box">
        {headingText.map((e) => (
          <div style={{ paddingLeft: '0.5rem' }}>
            <Text kind={e.kind}>{e.text}</Text>
            <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
              {e.styling}
            </div>
          </div>
        ))}
      </div>

      <h3>Text</h3>
      <p>Typographic scale for normal text</p>
      <div className="wfp--card-box">
        {Normaltext.map((e) => (
          <div style={{ paddingLeft: '0.5rem' }}>
            <Text kind={e.kind}>{e.text}</Text>
            <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
              {e.styling}
            </div>
          </div>
        ))}
      </div>

      <h3>Page title</h3>
      <p>Typographic scale for page title and overline</p>
      <div className="wfp--card-box">
        <div style={{ paddingLeft: '0.5rem' }}>
          <Text kind="title">Title</Text>
          <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
            58px, Light
          </div>
          <Text kind="subtitle">Overline</Text>
          <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
            14px, SemiBold
          </div>
        </div>
      </div>

      <h3>Links</h3>
      <Text kind="p">Typographic scale for links</Text>
      <div className="wfp--card-box">
        <div style={{ paddingLeft: '0.5rem' }}>
          <Text kind="a">Link</Text>
          <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
            16px, Regular
          </div>
          <Link className="wfp--link--hover">Link</Link>
          <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
            16px, Regular
          </div>
        </div>
      </div>

      <h3>Emphasis</h3>
      <p>Typographic scale for to put empahasis on text</p>
      <div className="wfp--card-box">
        {emphasisText.map((e) => (
          <div style={{ paddingLeft: '0.5rem' }}>
            <Text kind={e.kind}>{e.text}</Text>
            <div style={{ color: '#A9A9A9', marginBottom: '2rem' }}>
              {e.styling}
            </div>
          </div>
        ))}
      </div>

      <h3>Lists</h3>
      <p>
        Typographic scale for lists of items int he different variations:
        ordered and unordered
      </p>
      <div className="wfp--card-box">
        {list.map((e) => (
          <div style={{ paddingLeft: '0.5rem' }}>
            <Text kind="h4">{e.heading}</Text>
            <List kind={e.kind}>
              <ListItem>Numbered List 1</ListItem>
              <ListItem>Numbered List 2</ListItem>
              <ListItem>Numbered List 3</ListItem>
            </List>
          </div>
        ))}
      </div>

      <h3>Colors</h3>
      <p>Color accents to use on normal text</p>
      <div className="wfp--card-box">
        {colors.map((e) => (
          <div style={{ display: 'flex', paddingLeft: '0.5rem' }}>
            <div>
              <Text>{e.text}</Text>
              <div style={{ color: '#A9A9A9', marginBottom: '3rem' }}>
                16px, {e.color}
              </div>
            </div>
            <div
              style={{
                backgroundColor: e.color,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginLeft: '1.5rem',
              }}></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Typography;
