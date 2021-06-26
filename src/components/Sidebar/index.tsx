import { Box, Drawer, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerOverlay, useBreakpointValue, DrawerBody } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../hooks/SidebarDrawer';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  );
}