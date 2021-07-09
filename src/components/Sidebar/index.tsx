import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,DrawerHeader, DrawerOverlay, Icon, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarContext";
import { SidebarNav } from "./SidebarNav";


export function Sidebar(){
    const isDrawerSidebar = useBreakpointValue({
        base:true,
        lg:false
    })

    const {isOpen,onClose} = useSidebarDrawer();

    if(isDrawerSidebar){
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent padding="4" bg="gray.800">
                        <DrawerCloseButton/>
                        <DrawerHeader> Navegação </DrawerHeader>
                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav/>
        </Box>
    )
}