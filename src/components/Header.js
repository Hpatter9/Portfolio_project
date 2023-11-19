import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const previousScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (previousScrollPos.current > currentScrollPos) {
        setIsVisible(true); // Scrolling up, show the header
      } else {
        setIsVisible(false); // Scrolling down, hide the header
      }
      previousScrollPos.current = currentScrollPos;
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${isVisible ? 0 : "-200px"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {isVisible && (
            <nav>
              {/* Add social media links based on the `socials` data */}
              {socials.map((social) => (
                <a key={social.icon} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </a>
              ))}
            </nav>
          )}
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact Me section */}
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
              <IconButton
                aria-label="Scroll to top"
                icon={<FontAwesomeIcon icon={faArrowUp} />}
                onClick={scrollToTop}
                size="md"
                color={'black'}
              />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
