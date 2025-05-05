// components/Footer.tsx
import { Box, Flex, Text, Link, Stack, Divider, Image } from '@chakra-ui/react'

const footerLinks = [
  {
    title: 'Programs',
    links: [
      { label: 'All Programs', href: 'https://www.mindvalley.com/programs' },
      { label: 'Download The App', href: 'https://www.mindvalley.com/apps' },
      { label: 'Become A Member', href: 'https://www.mindvalley.com/membership' },
      { label: 'Certified Coach', href: 'https://www.mindvalley.com/certs' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Who We Are', href: 'https://www.mindvalley.com/about' },
      { label: 'Press', href: 'https://www.mindvalley.com/press' },
      { label: 'Careers', href: 'https://careers.mindvalley.com/' },
      { label: 'Blog', href: 'https://blog.mindvalley.com/' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'Membership', href: 'https://www.mindvalley.com/membership' },
      { label: 'Events', href: 'https://www.mindvalley.com/events' },
      { label: 'Mindvalley University', href: 'https://www.mindvalley.com/u' },
    ],
  },
  {
    title: 'Social Media',
    links: [
      { label: 'The Mindvalley Show', href: 'https://www.youtube.com/playlist?list=PLFHRIp24awjX5F3qyiErThPC9FXQmOykt' },
      { label: 'Instagram', href: 'https://www.instagram.com/mindvalley/' },
      { label: 'Facebook', href: 'https://www.facebook.com/mindvalley/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mindvalley/' },
      { label: 'Mindvalley YouTube', href: 'https://www.youtube.com/channel/UCg3F5jxUrSvJQICen48cX4w' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: 'Support', href: 'https://support.mindvalley.com/' },
      { label: 'Contact Us', href: 'https://www.mindvalley.com/contact' },
      { label: 'Partnerships', href: 'https://www.mindvalley.com/partnerships' },
      { label: 'Mindvalley Business', href: 'https://www.mindvalley.com/business' },
    ],
  },
  {
    title: 'Our Brands',
    links: [
      { label: 'Mindvalley States', href: 'https://www.mindvalleystates.com/' },
      { label: 'Lifebook', href: 'https://www.mindvalley.com/lifebook' },
      { label: 'WILDFIT', href: 'https://www.mindvalley.com/wildfit' },
      { label: 'Evercoach', href: 'https://www.evercoach.com/' },
      { label: 'Mindvalley Talks', href: 'https://www.youtube.com/user/awesomenessfest' },
    ],
  },
]

const socialIcons = [
  { alt: 'Facebook', href: 'https://www.facebook.com/mindvalley/', src: 'https://res.cloudinary.com/mindvalley/image/upload/fl_lossy,q_auto/Icons/Footer/icon-facebook.svg' },
  { alt: 'Twitter', href: 'https://www.x.com/mindvalley/', src: 'https://res.cloudinary.com/mindvalley/image/upload/v1728360066/logo/twitter-mv-cool-grey.svg' },
  { alt: 'Instagram', href: 'https://www.instagram.com/mindvalley/', src: 'https://res.cloudinary.com/mindvalley/image/upload/fl_lossy,q_auto/Icons/Footer/icon-instagram.svg' },
  { alt: 'YouTube', href: 'https://www.youtube.com/mindvalley/', src: 'https://res.cloudinary.com/mindvalley/image/upload/fl_lossy,q_auto/Icons/Footer/icon-youtube.svg' },
  { alt: 'LinkedIn', href: 'https://www.linkedin.com/company/mindvalley/', src: 'https://res.cloudinary.com/mindvalley/image/upload/fl_lossy,q_auto/Icons/Footer/icon-linkedin.svg' },
]

const Footer = () => {
  return (
    <Box as="footer" className="text-black pt-12 pb-8 text-sm">
      <Box className="container mx-auto px-4">
        <Flex wrap="wrap" justify="space-between" gap={4}>
          {footerLinks.map((section) => (
            <Box key={section.title} minW="150px">
              <Text fontWeight="bold" mb={2} className="uppercase text-base">{section.title}</Text>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} isExternal={link.href.includes('http')} fontSize="sm" fontWeight="semibold" color="gray.600" textDecoration="none" _hover={{color:"purple.600"}}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Flex>

        <Divider my={6} borderColor="gray.600" />

        <Flex flexDir={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={4}>
          <Text className="text-gray-400">&copy; 2025 Mindvalley, Inc.</Text>
          <Flex gap={4}>
            <Link href="https://www.mindvalley.com/terms-of-use" className="text-gray-400 hover:text-gray-200">Terms</Link>
            <Link href="https://www.mindvalley.com/privacy-policy" className="text-gray-400 hover:text-gray-200">Privacy</Link>
          </Flex>
          <Flex gap={3}>
            {socialIcons.map((icon) => (
              <Link key={icon.href} href={icon.href} isExternal aria-label={icon.alt}>
                <Image src={icon.src} alt={icon.alt} boxSize="20px" />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer;
