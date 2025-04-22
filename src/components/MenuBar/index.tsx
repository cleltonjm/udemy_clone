import * as Menubar from '@radix-ui/react-menubar'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Content, Label, MenuItem, Separator, Trigger } from './styles'

export function MenuBar() {
    return (
        <Menubar.Root>
		<Menubar.Menu>
			<Trigger>
                Explorar
            </Trigger>
			<Menubar.Portal>
				<Content>
					<Label>Navegar pelas certificações</Label>
					<MenuItem>
                        Preparação para certificação
                        <ChevronRightIcon />
                    </MenuItem>

                    <Separator />

                    <MenuItem>
                        Desenvolvimento
						<ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Negócios
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        TI e software
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Finanças e contabilidade
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Produtividade no escritório
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Desenvolvimento Pessoal
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Design
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Marketing
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Estilo de vida
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Fotografia e vídeo
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Saúde e fitness
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Música
                        <ChevronRightIcon />
                    </MenuItem>
                    <MenuItem>
                        Ensino e estudo acadêmico
                        <ChevronRightIcon />
                    </MenuItem>

					<Menubar.Group>
						<Menubar.Item />
					</Menubar.Group>

					

					<Menubar.Sub>
						<Menubar.SubTrigger />
						<Menubar.Portal>
							<Menubar.SubContent />
						</Menubar.Portal>
					</Menubar.Sub>

					
				</Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
    )
}