import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps{
    showDataProfile?: boolean;
}
export function Profile({showDataProfile}:ProfileProps){
    return(
        <Flex align="center">
            {showDataProfile && (
                <Box>
                    <Text>Celso Vasconcelos</Text>
                    <Text color="gray.300" fontSize="small">
                        celsolnv27@gmail.com
                    </Text>
                </Box>

            )}
        <Avatar size="md" name="Celso Vasconcelos" />
    </Flex>
    )
}