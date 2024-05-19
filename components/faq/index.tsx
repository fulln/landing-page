import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text h2>FAQ</Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        ReadLecture 可以帮我做什么？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        自动视频转图文：ReadLecture 专注于讲座类视频转换为图文结合的文档，大幅提升视频内容观看效率。不仅能够精准截取视频中的PPT，还能将演讲者的语音转换成准确的文字稿，方便阅读和整理。

                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       智能AI笔记生成 ：通过专业的AI大模型根据讲座内容生成多维度笔记，包括内容大纲思维导图、自我问答、金句摘抄、专业术语解释、内容翻译等内容，助你高效学习讲座视频内容
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        ReadLecture 有什么常见使用场景？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        知识管理：视频教程变图文，阅读、检索、链接更高效
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        内容创作：丰富你的内容创作素材，激发创作灵感
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        教育培训：让你的演讲视频自动生成文章，扩大传播范围
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        会议记录：轻松记录会议所有细节，重要信息文字归档
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        ReadLecture 收费吗？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        内测期间免费，欢迎试用，反馈宝贵意见。
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        ReadLecture 支持什么样的视频？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        ReadLecture 专注于转换讲座类视频，即视频内容为PPT为主的演讲视频，最终生成截取的PPT图片和演讲者文字稿，方便用户阅读和整理。
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        ReadLecture 如何使用？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        在首页输入框中填写视频地址，如Bilibili、YouTube等，点击按钮，即可生成图文结合的文档。本地视频上传功能正在开发中，敬请期待。
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        如何联系我们？
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        关注微信公众号：ReadLecture
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
{/*
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         /> */}
      </>
   );
};
