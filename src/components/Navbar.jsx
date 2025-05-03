import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={isScrolled ? "white" : "transparent"}
      boxShadow={isScrolled ? "md" : "none"}
      transition="all 0.3s ease"
      className="w-full"
    >
      {/* Skip to content link (accessibility) */}
      <Link
        href="#main-content"
        position="absolute"
        left={4}
        top={-12}
        _focus={{ top: 4 }}
        className="skip-link"
      >
        Skip to content
      </Link>

      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }} bg={{base:"white", md:"transparent"}}>
        <Flex justify="space-between" align="center" py={5}>
          {/* Logo */}
          <Box>
            <Link href="/" title="Mindvalley Home Page">
              <Image
                src="https://res.cloudinary.com/mindvalley/image/upload/v1640746015/mvcom/mv-logo.svg"
                alt="Mindvalley Logo"
                w={{ base: "120px", md: "154px" }}
                h="auto"
                
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Hide below="lg">
            <Flex as="nav" align="center" gap={1}>
              
              {/* Membership */}
              <Menu>
              <MenuButton
                  as={Button}
                  variant="plain"
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={2}
                  >
                  Membership
                </MenuButton>
                </Menu>
                 {/* Categories */}
                 <Menu>
                <MenuButton
                  as={Button}
                  variant="plain"
                  rightIcon={<ChevronDownIcon />}
                  iconSpacing="1"
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={3}
                 >
                  Categories
                </MenuButton>
                <MenuList border="none" py={0} minW="200px" borderRadius="lg" shadow="xl">
                  <MenuItem as={Link}  href="/programs" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    All Categories
                  </MenuItem>
                  <MenuItem as={Link}  href="/programs/mind" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{ color: "purple.600", textDecoration:"none" }}>
                    Mind
                  </MenuItem>
                  <MenuItem as={Link}  href="/programs/body" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{ color: "purple.600", textDecoration:"none" }}>
                    Body
                  </MenuItem>
                  <MenuItem as={Link}  href="/programs/spirituality" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm"  _hover={{color: "purple.600", textDecoration:"none" }}>
                    Soul
                  </MenuItem>
                  <MenuItem as={Link}  href="/programs/entrepreneurship" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm"  _hover={{color: "purple.600", textDecoration:"none" }}>
                    Entrepreneurship
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Community */}
              <Menu>
                <MenuButton
                  as={Button}
                  variant="plain"
                  rightIcon={<ChevronDownIcon />}
                  fontWeight="medium"
                  fontSize="md"
                  iconSpacing="1"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={2}
                  >
                  Community
                </MenuButton>
                <MenuList border="none" py={0} minW="200px" borderRadius="lg" shadow="xl">
                  <MenuItem as={Link} href="/community" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Community First
                  </MenuItem>
                  <MenuItem as={Link} href="/events" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Global Events
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Results */}
              <Menu>
                <MenuButton
                  as={Button}
                  variant="plain"
                  rightIcon={<ChevronDownIcon />}
                  iconSpacing="1"
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={2}
                  >
                  Results
                </MenuButton>
                <MenuList border="none" py={0} minW="200px" borderRadius="lg" shadow="xl">
                  <MenuItem as={Link} href="/community" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    20,000+ Case Studies
                  </MenuItem>
                  <MenuItem as={Link} href="/events" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Our Transformational Modal
                  </MenuItem>
                  <MenuItem as={Link} href="/events" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    How MindValley Works?
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* At Work */}
              <Menu>
                <MenuButton
                  as={Button}
                  variant="plain"
                  rightIcon={<ChevronDownIcon />}
                  iconSpacing="1"
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={2}
                  >
                  At Work
                </MenuButton>
                <MenuList border="none" py={0} minW="200px" borderRadius="lg" shadow="xl">
                  <MenuItem as={Link} href="/community" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Business
                  </MenuItem>
                  <MenuItem as={Link} href="/events" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Find a Coach
                  </MenuItem>
                  <MenuItem as={Link} href="/events" py={3} bg="black" color="white" fontWeight="semibold" fontSize="sm" _hover={{  color: "purple.600", textDecoration:"none" }}>
                    Become a Coach
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Support */}
              <Menu>
              <MenuButton
                  as={Button}
                  variant="plain"
                  fontWeight="medium"
                  fontSize="md"
                  _hover={{ color: "purple.500" }}
                  color="white"
                  px={2}
                  >
                  Support
                </MenuButton>
                </Menu>
            </Flex>
            <Flex align="center" gap={3}>
            <Box justifyContent="space-between" gap={2} display="flex" alignItems="center">
            <Button variant="plain" leftIcon={<AiOutlineGlobal size="20px" />} color="white" fontSize="md">
            EN
            </Button>
            </Box>
              <Link href="/login" fontWeight="medium"  _hover={{ color: "purple.500" }} color="white">
                Log in
              </Link>
              <Button size="md" fontWeight="bold" bg="transparent" color="white" borderRadius="full" border="2px" px={6} borderColor="white"
              _hover={{bg:"transparent", color:"purple.500"}}>
              Create an account
              </Button>

            </Flex>
          </Hide>

          {/* Mobile Hamburger & Collapse Menu */}
<Show below="lg">
  <Flex align="center" gap={4}>
    <Button variant="ghost" p={0}>
      <AiOutlineGlobal size="24px" color="black" />
    </Button>
    <IconButton
      aria-label="Toggle Menu"
      color="black"
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      variant="ghost"
      onClick={isOpen ? onClose : onOpen}
    />
  </Flex>
  {isOpen && (
  <Box 
    bg="white" 
    w="full" 
    px={4} 
    py={6} 
    shadow="md" 
    position="absolute" 
    top="80%" 
    left="0" 
    zIndex="999"
  >
    <VStack align="start" spacing={0}>
      {/* Membership - Simple Link */}
      <Link 
        href="/membership" 
        fontWeight="medium" 
        fontSize="md"
        py={3}
        w="full"
        _hover={{ color: "purple.500", textDecoration:"none" }}
        >
        Membership
      </Link>
      
      {/* Categories - Accordion */}
      <Box w="full">
        {activeSubmenu === 'categories' ? (
          <Box w="full">
            <Button 
              onClick={() => setActiveSubmenu(null)}
              variant="ghost" 
              w="full" 
              textAlign="left"
              justifyContent="space-between"
              fontWeight="medium"
              fontSize="md"
              py={3}
              px={0}
              rightIcon={<ChevronUpIcon />}
              _hover={{ color: "purple.500" }}
            >
              Categories
            </Button>
            <VStack align="start" spacing={0} pl={4}>
              <Link 
                href="/programs" 
                py={2}
                pl={4}
                w="full"
                fontWeight="medium"
                _hover={{ color: "purple.500" }}
              >
                All Categories
              </Link>
              <Link 
                href="/programs/mind" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Mind
              </Link>
              <Link 
                href="/programs/body" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Body
              </Link>
              <Link 
                href="/programs/spirituality" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Soul
              </Link>
              <Link 
                href="/programs/entrepreneurship" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Entrepreneurship
              </Link>
              <Link 
                href="/programs/career" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Career
              </Link>
              <Link 
                href="/programs/relationships" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Relationships
              </Link>
            </VStack>
          </Box>
        ) : (
          <Button 
            onClick={() => setActiveSubmenu('categories')}
            variant="ghost" 
            rightIcon={<ChevronDownIcon />} 
            w="full" 
            textAlign="left"
            justifyContent="space-between"
            fontWeight="medium"
            fontSize="md"
            py={3}
            px={0}
            _hover={{ color: "purple.500" }}
          >
            Categories
          </Button>
        )}
      </Box>

      {/* Community - Accordion */}
      <Box w="full">
        {activeSubmenu === 'community' ? (
          <Box w="full">
            <Button 
              onClick={() => setActiveSubmenu(null)}
              variant="ghost" 
              w="full" 
              textAlign="left"
              justifyContent="space-between"
              fontWeight="medium"
              fontSize="md"
              py={3}
              px={0}
              rightIcon={<ChevronUpIcon />} 
              _hover={{ color: "purple.500" }}
            >
              Community
            </Button>
            <VStack align="start" spacing={0} pl={4}>
              <Link 
                href="/community" 
                py={2}
                pl={4}
                w="full"
                fontWeight="medium"
                _hover={{ color: "purple.500" }}
              >
                Community First
              </Link>
              <Link 
                href="/events" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Global Events
              </Link>
            </VStack>
          </Box>
        ) : (
          <Button 
            onClick={() => setActiveSubmenu('community')}
            variant="ghost" 
            rightIcon={<ChevronDownIcon />} 
            w="full" 
            textAlign="left"
            justifyContent="space-between"
            fontWeight="medium"
            fontSize="md"
            py={3}
            px={0}
            _hover={{ color: "purple.500" }}
          >
            Community
          </Button>
        )}
      </Box>

      {/* Results - Accordion */}
      <Box w="full">
        {activeSubmenu === 'results' ? (
          <Box w="full">
            <Button 
              onClick={() => setActiveSubmenu(null)}
              variant="ghost" 
              w="full" 
              textAlign="left"
              justifyContent="space-between"
              fontWeight="medium"
              fontSize="md"
              py={3}
              px={0}
              rightIcon={<ChevronUpIcon />} 
              _hover={{ color: "purple.500" }}
            >
              Results
            </Button>
            <VStack align="start" spacing={0} pl={4}>
              <Link 
                href="/community" 
                py={2}
                pl={4}
                w="full"
                fontWeight="medium"
                _hover={{ color: "purple.500" }}
              >
                20,000+ Case Studies
              </Link>
              <Link 
                href="/events" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Our Transformational Modal
              </Link>
              <Link 
                href="/events" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                How MindValley Works?
              </Link>
            </VStack>
          </Box>
        ) : (
          <Button 
            onClick={() => setActiveSubmenu('results')}
            variant="ghost" 
            rightIcon={<ChevronDownIcon />} 
            w="full" 
            textAlign="left"
            justifyContent="space-between"
            fontWeight="medium"
            fontSize="md"
            py={3}
            px={0}
            _hover={{ color: "purple.500" }}
          >
            Results
          </Button>
        )}
      </Box>

      {/* At Work - Accordion */}
      <Box w="full">
        {activeSubmenu === 'atWork' ? (
          <Box w="full">
            <Button 
              onClick={() => setActiveSubmenu(null)}
              variant="ghost" 
              w="full" 
              textAlign="left"
              justifyContent="space-between"
              fontWeight="medium"
              fontSize="md"
              py={3}
              px={0}
              rightIcon={<ChevronUpIcon />} 
              _hover={{ color: "purple.500" }}
            >
              At Work
            </Button>
            <VStack align="start" spacing={0} pl={4}>
              <Link 
                href="/community" 
                py={2}
                pl={4}
                w="full"
                fontWeight="medium"
                _hover={{ color: "purple.500" }}
              >
                Business
              </Link>
              <Link 
                href="/events" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Find a Coach
              </Link>
              <Link 
                href="/events" 
                py={2}
                pl={4}
                w="full"
                _hover={{ color: "purple.500" }}
              >
                Become a Coach
              </Link>
            </VStack>
          </Box>
        ) : (
          <Button 
            onClick={() => setActiveSubmenu('atWork')}
            variant="ghost" 
            rightIcon={<ChevronDownIcon />} 
            w="full" 
            textAlign="left"
            justifyContent="space-between"
            fontWeight="medium"
            fontSize="md"
            py={3}
            px={0}
            _hover={{ color: "purple.500" }}
          >
            At Work
          </Button>
        )}
      </Box>

      {/* Support - Simple Link */}
      <Link 
        href="/support" 
        fontWeight="medium" 
        fontSize="md"
        py={3}
        w="full"
        _hover={{ color: "purple.500", textDecoration:"none" }}
      >
        Support
      </Link>
    </VStack>
  </Box>
)}
</Show>
        </Flex>
      </Box>
    </Box>
  );
};

// Custom Globe Icon
const GlobeIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Navbar;