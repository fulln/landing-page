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
                  flexDirection: 'row',
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
                  // 居中
                  css={{
                     maxWidth: '800px',
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
                     // maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  The easiest way to build React Landing page in seconds. Save
                  time and focus on your project.
               </Text>

              
            </Box>
            {/* <Box>
            <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="Enter your email address" size="lg" />
                  <Button>Start Free Trial</Button>
               </Flex>
            </Box> */}
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
