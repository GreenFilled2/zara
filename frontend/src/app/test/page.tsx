'use client';
import React from 'react';

import './test.css'

export default function Teset() {
    return (
        <div>
        <main id="main" className='layout-content__main'>
          <article className='layout-content_article  layout-user__content-article'>
            <div className='grid-block grid-block--colomus-6 grid-block--margin-left-0 grid-block--display-block layout-usr__container'>
              <div>
                <div className='variable-width-carousel layout-usr-navigation nav-row__carousel'>
                  <div className='variable-width-carousel__viewport'>
                    <ul className='variable-width-carousel__items' style={{ pointerEvents: 'auto', transform: 'none' }}>
                      <li className='variable-width-carousel__items'>
                        < div className='nav-row__item nav-row__item--active link' tabIndex={0}>
                          <span>Achhats</span>
                        </div>
                      </li>
                      <li className='variable-width-carousel__item'>
                        <div className='nav-row__item link' tabIndex={0}>
                          <span>Compte</span>
                        </div>
                      </li>
                      <li className='variable-width-carousel__item'>
                        <div className='nav-row__item link' tabIndex={0}>
                          <span>AIDE</span>
                        </div>
                      </li>
                      <li className='variable-width-carousel__item'>
                        <div className='nav-row__item link' tabIndex={0}>
                          <span>Paramètres</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='zds-divider layout-user-navigation__divider' role='presentation'></div>
              <div className='content-header layout-user__content-header content-header--with-description'>
                <div className='content-header__info'>
                 
                    <div>
                      <div className='variable-width-carousel order-list-nav nav-row__carousel'>
                        <div className='variable-width-carousel__viewport'>
                          <ul className='variable-width-carousel__items' style={{ pointerEvents: 'auto', transform: 'none' }}>
                            <li className='variable-width-carousel__item'>
                              <div className='nav-row__item nav-row__item--active link' tabIndex={0}>
                                <span>En ligne</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  
                </div>
                <div className='content-header__actions'></div>
              </div>
              <h3 className='screen-reader-text'>
                <span>Mon compte - COMMANDES PASSEES</span>
              </h3>
              <div className='grid-block grid-block--colums-12 grid-block--margin-left-0 grid-block--display-inline'>
                <div className='zds-empty-state zds-empty-state--align-center'>
                  <div aria-hidden="true">
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' viewBox='0 0 32' fill='inherit' stroke='inherit'>
                      <path fillRule='evenodd' clipRule={'evenodd'} d="M8.667 5.5h-.5v21h15.8v-21h-15.3zm.5 20v-19h13.8v19h-13.8zm2.433-16h-.5v1h6.2v-1h-5.7zm-.5 8h9.8v1h-9.8v-1zm.5 4h-.5v1h9.8v-1h-9.3z">
                      </path>
                    </svg>
                  </div>
                  <div className='zds-empty-state__title'>
                    <span>Vous n'avez pas encore passé</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    )}