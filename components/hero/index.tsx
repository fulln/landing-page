import { Button, Divider, Input, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'column',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
               <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
               <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                    transform lecture videos into rich textual content {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}

                  >
                     with{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"

                  >
                     ReadLecture
                  </Text>
                  {/* <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">in simple link</p> */}

                  <form action="#" className="max-w-xl mx-auto mt-10">
                     <div>
                        <label htmlFor="" className="sr-only"> Search </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                           </div>

                           <input type="text" name="" id="" placeholder="youtube, bilibili url etc..." className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2" />
                        </div>
                     </div>

                     <div>
                        <button
                           type="submit"
                           className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-gray-800
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                        >
                           generate now
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
