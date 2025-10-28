import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { styles } from './styles';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/Item';

const FILTER_STATUS = [FilterStatus.PENDING, FilterStatus.DONE];
//const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index))
const ITEMS = [
  { 
    id: "1", 
    status: FilterStatus.PENDING, 
    description: "Leite" 
  },
  { 
    id: "2", 
    status: FilterStatus.DONE, 
    description: "Ovos" },
  { 
    id: "3", 
    status: FilterStatus.PENDING, 
    description: "Pão" },
  { 
    id: "4", 
    status: FilterStatus.DONE, 
    description: "Manteiga" },
  { 
    id: "5", 
    status: FilterStatus.PENDING, 
    description: "Café" },
]

export function Home() {

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button title='Adicionar'/>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={ status } isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
            data={ITEMS}
            keyExtractor={item => item.id}
            renderItem={( { item }) => (
              <Item 
                  // data={{ status: item.status, description: item.description }} 
                  data={item}
                  onStatus={() => console.log("mudar status")}
                  onRemove={() => console.log("remover")}
                />
            )} 
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ () => <View style={styles.separator}/>}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui</Text>}

        />   
      </View>

    </View>
  )
}

