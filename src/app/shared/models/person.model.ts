// Define a estrutura de um único registo de pessoa
export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  status: 'DESAPARECIDO' | 'LOCALIZADO';
  foto: string;
  cidade: string;
  estado: string;
  dataDesaparecimento: string;
  informacoes: string;
  // Adicione outros campos que a API retornar, se necessário
}

// Define a estrutura da resposta paginada da API
export interface PaginatedResponse<T> {
  content: T[];
  pageable: any;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  empty: boolean;
}
