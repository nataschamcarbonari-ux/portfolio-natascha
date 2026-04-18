import React, { useState } from 'react';
import s from './TennisConnectDesignSystemPage.module.css';

type DialogVariant = 'default' | 'danger' | null;

const TennisConnectDesignSystemPage: React.FC = () => {
  const [dialog, setDialog] = useState<DialogVariant>(null);

  return (
    <div className={s.wrapper}>
      <h1 className={s.pageTitle}>TennisConnect Design System</h1>
      <p className={s.pageSub}>Visual reference · tokens, components and styles</p>

      <div className={s.grid}>

        {/* Colors */}
        <div className={`${s.card} ${s.wide}`}>
          <div className={s.cardTitle}>Color Palette — Blue</div>
          <div className={s.swatchGrid}>
            {[
              ['blue-50','#F0F1F4'],['blue-100','#D3D5DF'],['blue-200','#ABB4D4'],
              ['blue-300','#768AD6'],['blue-400','#4E69CA'],['blue-500','#3550B1'],
              ['blue-600','#243B8E'],['blue-700','#1C2A5F'],['blue-800','#161D37'],
              ['blue-900','#0E1325'],
            ].map(([name, hex]) => (
              <div key={name} className={s.swatch}>
                <div className={s.swatchBox} style={{ background: hex }} />
                <div className={s.swatchLabel}>{name}<br />{hex}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14 }} className={s.cardTitle}>Color Palette — Orange</div>
          <div className={s.swatchGrid}>
            {[
              ['orange-50','#F6F2EE'],['orange-100','#E4D8CD'],['orange-200','#E6BD99'],
              ['orange-300','#FFA04D'],['orange-400','#FF7800'],['orange-500','#E66B00'],
              ['orange-600','#B35300'],['orange-700','#803C00'],['orange-800','#452408'],
              ['orange-900','#2E1805'],
            ].map(([name, hex]) => (
              <div key={name} className={s.swatch}>
                <div className={s.swatchBox} style={{ background: hex }} />
                <div className={s.swatchLabel}>{name}<br />{hex}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14 }} className={s.cardTitle}>Semantics</div>
          <div className={s.semanticRow}>
            <div className={s.semSwatch} style={{ background: '#dff4e8', color: '#2a7a4f' }}>
              success<br /><span style={{ fontWeight: 400, fontSize: 10 }}>#dff4e8 · #2a7a4f</span>
            </div>
            <div className={s.semSwatch} style={{ background: '#fef3e2', color: '#492E0A' }}>
              error bg<br /><span style={{ fontWeight: 400, fontSize: 10 }}>#fef3e2 · text #492E0A</span>
            </div>
            <div className={s.semSwatch} style={{ background: '#F6F2EE', color: '#B35300' }}>
              orange-50<br /><span style={{ fontWeight: 400, fontSize: 10 }}>used for warning</span>
            </div>
            <div className={s.semSwatch} style={{ background: '#dc2626', color: '#fff' }}>
              danger<br /><span style={{ fontWeight: 400, fontSize: 10 }}>#dc2626</span>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className={s.card}>
          <div className={s.cardTitle}>Typography</div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>h1 · 20px / 700</span>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#161D37' }}>Heading H1</h1>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>h2 · 18px / 600</span>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: '#243B8E' }}>Heading H2</h2>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>h3 · 16px / 600</span>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#243B8E' }}>Heading H3</h3>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>h4 · 16px / 600</span>
            <h4 style={{ fontSize: 16, fontWeight: 600, color: '#1C2A5F' }}>Heading H4</h4>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>p · 16px / 400</span>
            <p style={{ fontSize: 16, color: '#0E1325' }}>Standard body text paragraph</p>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>label · 14px / 600</span>
            <label style={{ fontSize: 14, fontWeight: 600, color: '#243B8E' }}>Field label</label>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>a · 14px / orange</span>
            <a href="#" style={{ fontSize: 14, color: '#B35300', textDecoration: 'underline' }}>Action link</a>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>sm · 14px / 400</span>
            <span style={{ fontSize: 14, color: '#0E1325' }}>Small text (sm)</span>
          </div>
          <div className={s.typeRow}>
            <span className={s.typeMeta}>xs · 12px / 400</span>
            <span style={{ fontSize: 12, color: '#768AD6' }}>Extra-small text (xs)</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: '#768AD6' }}>
            Family: <strong>Sora</strong>, sans-serif
          </div>
        </div>

        {/* Buttons */}
        <div className={s.card}>
          <div className={s.cardTitle}>Buttons</div>
          <div className={s.btnGroup}>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 6 }}>Primary</div>
              <div className={s.btnRow}>
                <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnSm}`}>sm</button>
                <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnMd}`}>md</button>
                <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnLg}`}>lg</button>
                <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnMd}`} disabled>disabled</button>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 6 }}>Secondary</div>
              <div className={s.btnRow}>
                <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnSm}`}>sm</button>
                <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnMd}`}>md</button>
                <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnLg}`}>lg</button>
                <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnMd}`} disabled>disabled</button>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 6 }}>Underlined</div>
              <div className={s.btnRow}>
                <button className={`${s.dsBtn} ${s.dsBtnUnderlined}`} style={{ fontSize: 13 }}>Action link</button>
                <button className={`${s.dsBtn} ${s.dsBtnUnderlined}`} style={{ fontSize: 13, opacity: .45, cursor: 'not-allowed' }}>disabled</button>
              </div>
            </div>
            <div style={{ marginTop: 4, padding: 10, background: '#F0F1F4', borderRadius: 8 }}>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 8 }}>Full width</div>
              <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnMd}`} style={{ width: '100%' }}>Full-width button</button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className={s.card}>
          <div className={s.cardTitle}>Badges</div>
          <div className={s.badgeRow}>
            <span className={`${s.dsBadge} ${s.badgeSobe}`}>↑ Rising</span>
            <span className={`${s.dsBadge} ${s.badgeDesce}`}>↓ Falling</span>
            <span className={`${s.dsBadge} ${s.badgeMantem}`}>= Steady</span>
            <span className={`${s.dsBadge} ${s.badgePausado}`}>Paused</span>
            <span className={`${s.dsBadge} ${s.badgePendente}`}>Pending</span>
            <span className={`${s.dsBadge} ${s.badgeFinalizado}`}>Finished</span>
          </div>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div style={{ padding: '8px 10px', background: '#dff4e8', borderRadius: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#2a7a4f', textTransform: 'uppercase', letterSpacing: '.05em' }}>rising / finished</div>
              <div style={{ fontSize: 11, color: '#2a7a4f', marginTop: 2 }}>bg #dff4e8 · text #2a7a4f</div>
            </div>
            <div style={{ padding: '8px 10px', background: '#E4D8CD', borderRadius: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#803C00', textTransform: 'uppercase', letterSpacing: '.05em' }}>falling / pending</div>
              <div style={{ fontSize: 11, color: '#803C00', marginTop: 2 }}>bg #E4D8CD · text #803C00</div>
            </div>
            <div style={{ padding: '8px 10px', background: '#F0F1F4', borderRadius: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#4E69CA', textTransform: 'uppercase', letterSpacing: '.05em' }}>steady</div>
              <div style={{ fontSize: 11, color: '#4E69CA', marginTop: 2 }}>bg #F0F1F4 · text #4E69CA</div>
            </div>
            <div style={{ padding: '8px 10px', background: '#F6F2EE', borderRadius: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#B35300', textTransform: 'uppercase', letterSpacing: '.05em' }}>paused</div>
              <div style={{ fontSize: 11, color: '#B35300', marginTop: 2 }}>bg #F6F2EE · text #B35300</div>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className={s.card}>
          <div className={s.cardTitle}>Inputs</div>
          <div className={s.inputCol}>
            <div>
              <span className={s.dsLabel}>Default field</span>
              <input className={s.dsInput} placeholder="Placeholder here..." type="text" />
            </div>
            <div>
              <label className={s.dsLabel} htmlFor="ds-search-demo">Search with icon</label>
              <div className={s.searchWrap}>
                <svg className={s.searchIcon} viewBox="0 -960 960 960" fill="currentColor">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
                <input id="ds-search-demo" className={s.dsSearch} placeholder="Search player..." type="text" />
              </div>
            </div>
            <div>
              <span className={s.dsLabel}>Focused field (blue-300 border)</span>
              <input className={s.dsInput} style={{ borderColor: '#768AD6' }} placeholder="Focused..." type="text" />
            </div>
            <div>
              <span className={s.dsLabel}>Field with error</span>
              <input className={`${s.dsInput} ${s.dsInputError}`} defaultValue="invalid-email" type="text" />
              <span style={{ fontSize: 11, color: '#dc2626', marginTop: 3, display: 'block' }}>Required field.</span>
            </div>
            <div>
              <span className={s.dsLabel}>Disabled</span>
              <input className={s.dsInput} disabled defaultValue="Not editable" type="text" />
            </div>
          </div>
        </div>

        {/* Feedback & alerts */}
        <div className={s.card}>
          <div className={s.cardTitle}>Feedback &amp; alerts</div>
          <div className={s.feedbackCol}>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 5 }}>Alert (simple error)</div>
              <div className={s.dsAlertError} role="alert">Required field. Please fill in before continuing.</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 5 }}>ErrorAlert (card with icon)</div>
              <div className={s.dsErrorAlert} role="alert">
                <svg className={s.iconSm} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span style={{ fontSize: 13 }}>Failed to connect to the server. Please try again.</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 5 }}>EmptyState</div>
              <p className={s.dsEmpty}>No matches found.</p>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 5 }}>LoadingSpinner</div>
              <div className={s.dsSpinner}>
                <div className={s.spinnerRing} />
                <span style={{ color: '#4E69CA' }}>Loading...</span>
              </div>
            </div>
            <div style={{ padding: 10, background: '#dff4e8', borderRadius: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#2a7a4f', marginBottom: 4 }}>Success banner</div>
              <div style={{ fontSize: 12, color: '#2a7a4f' }}>Draw completed! 48 matches generated in total.</div>
            </div>
          </div>
        </div>

        {/* ConfirmDialog */}
        <div className={s.card}>
          <div className={s.cardTitle}>ConfirmDialog</div>
          <div className={s.dialogTriggerRow}>
            <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnSm}`} onClick={() => setDialog('default')}>Open default dialog</button>
            <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnSm}`} onClick={() => setDialog('danger')}>Open danger dialog</button>
          </div>
          {dialog && (
            <div className={s.dialogBackdrop}>
              <div className={s.dialogCard}>
                <div className={s.dialogTitle}>{dialog === 'danger' ? 'Cancel Draw' : 'Confirm Draw'}</div>
                <div className={s.dialogDesc}>
                  {dialog === 'danger'
                    ? 'Do you want to cancel the draw for Stage 3 of 2025? All generated matches will be removed.'
                    : 'Do you want to run the draw for Stage 3 of 2025? This will generate all matches for the next stage.'}
                </div>
                <div className={s.dialogActions}>
                  <button className={`${s.dsBtn} ${s.dsBtnSecondary} ${s.dsBtnSm}`} onClick={() => setDialog(null)}>Cancel</button>
                  <button className={`${s.dsBtn} ${s.dsBtnPrimary} ${s.dsBtnSm}`}>
                    {dialog === 'danger' ? 'Confirm cancellation' : 'Confirm'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Spacing */}
        <div className={s.card}>
          <div className={s.cardTitle}>Spacing</div>
          <div className={s.spacingRow}>
            {[4, 8, 12, 16, 20, 24, 28, 32, 40].map(px => (
              <div key={px} className={s.spaceItem}>
                <div className={s.spaceBlock} style={{ height: px, width: 40 }} />
                <span className={s.spaceLabel}>{px}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div className={s.card}>
          <div className={s.cardTitle}>Border Radius</div>
          <div className={s.radiusRow}>
            {[
              { label: 'sm\n6px', r: 6, w: 48, h: 48 },
              { label: 'md\n8px', r: 8, w: 48, h: 48 },
              { label: 'lg\n12px', r: 12, w: 48, h: 48 },
              { label: 'xl\n14px', r: 14, w: 48, h: 48 },
              { label: 'pill\n999px', r: 999, w: 64, h: 32 },
              { label: 'circle\n50%', r: '50%', w: 36, h: 36 },
            ].map(({ label, r, w, h }) => (
              <div key={label} className={s.spaceItem}>
                <div className={s.radiusBox} style={{ width: w, height: h, borderRadius: r }} />
                <span className={s.radiusLabel}>{label.split('\n')[0]}<br />{label.split('\n')[1]}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 10, color: '#768AD6', marginBottom: 8 }}>Tokens used in the project</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, fontSize: 11 }}>
              <div style={{ background: '#F0F1F4', borderRadius: 6, padding: '6px 8px', color: '#243B8E' }}><code>--radius-sm</code><br />6px · alerts</div>
              <div style={{ background: '#F0F1F4', borderRadius: 8, padding: '6px 8px', color: '#243B8E' }}><code>--radius-md</code><br />8px · inputs</div>
              <div style={{ background: '#F0F1F4', borderRadius: 12, padding: '6px 8px', color: '#243B8E' }}><code>--radius-lg</code><br />12px · cards</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TennisConnectDesignSystemPage;
