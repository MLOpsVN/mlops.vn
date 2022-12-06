import TitleSection from '@/components/title_section';
import styles from './Vision.module.scss';
import { Animate } from 'react-simple-animate';
import { useRef } from 'react';
import { useIsInViewPort } from '@/core/hook/useIsInViewPort';

const Vision = () => {
  const visionRef = useRef();
  const isInView = useIsInViewPort(visionRef);

  return (
    <div className={styles.root} id="vision" ref={visionRef}>
      <div className={styles.content_w}>
        <div>
          <Animate
            play={Boolean(isInView)}
            duration={1}
            start={{
              opacity: '0',
              transform: 'translateY(400px)',
            }}
            end={{
              opacity: '1',
              transform: 'translateY(0)',
            }}>
            <div>
              <div>
                <TitleSection title={'Vision'} />
              </div>
              <div className={styles.content}>
                Open Factor Foundation commits to enable Vietnamese youth to bring inclusive and effective AI solutions to industries and sectors.
                We empower the youth with systematic and practical best practices from global AI industry tailored for Vietnam market.
              </div>
            </div>
          </Animate>
        </div>
        <Animate
          play={Boolean(isInView)}
          duration={1}
          start={{
            transform: 'translateX(400px)',
          }}
          end={{
            transform: 'translateX(0)',
          }}>
          <div className={styles.img}></div>
        </Animate>
      </div>
    </div>
  );
};

export default Vision;
