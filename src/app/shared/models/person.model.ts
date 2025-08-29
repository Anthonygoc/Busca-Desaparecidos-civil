// Define a estrutura da última ocorrência associada a uma pessoa
export interface UltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao: string | null;
  localDesaparecimentoConcat: string;
}

export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string | null;
  ultimaOcorrencia: UltimaOcorrencia;
}

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

export interface Statistics {
  quantPessoasDesaparecidas: number;
  quantPessoasEncontradas: number;
}

export interface OcorrenciaEntrevDesapDTO {
  informacao: string | null;
  vestimentasDesaparecido: string | null;
}

export interface UltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao: string | null;
  localDesaparecimentoConcat: string;
  // Adicionamos o objeto aninhado
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
}

export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string | null;
  ultimaOcorrencia: UltimaOcorrencia;
}
