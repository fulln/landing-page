import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

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
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Turn Videos into Readable Content  {' '}
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
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     textAlign: 'center',
                     // maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  The easiest way to  on your project.
               </Text>
            </Box>
            <Box>
            <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                     width: '100%',
                  }}
                  wrap={'wrap'}
               >
                  <Input
                  placeholder="http://bilibili.com/video" size="lg" />
                  <Button
                  >generate</Button>
               </Flex>
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
