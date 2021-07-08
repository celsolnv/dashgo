import { Checkbox,Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../Sidebar";

export default function UserList(){
    return(
        <Box>
            <Header></Header>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={ <Icon as ={RiAddLine} fontSize="20" /> }
                        >
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8"> 
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="10"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Celso Leandro</Text>
                                        <Text fontSize="small" color="gray.300">Celsolnv27@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text fontSize="small" color="gray.300">27 de agosto de 2001</Text>
                                </Td>
                                <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    colorScheme="purple"
                                    fontSize="sm"
                                    leftIcon={ <Icon as ={RiPencilLine} fontSize="16" /> }
                                >
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}