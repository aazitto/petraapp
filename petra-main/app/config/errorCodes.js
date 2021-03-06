export default {
    'auth/too-many-requests': 'Muitas petições seguidas. Tente esperar uns minutos e tente entrar de novo.',
    'auth/claims-too-large': 'O payload de declarações fornecido para setCustomUserClaims() excede o tamanho máximo permitido de 1.000 bytes.',
    'auth/email-already-exists': 'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.',
    'auth/email-already-in-use': 'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/id-token-expired': 'O token de código do Firebase provisionado expirou.',
    'auth/id-token-revoked': 'O token de código do Firebase foi revogado.',
    'auth/insufficient-permission': 'A credencial usada para inicializar o Admin SDK não tem permissão para acessar o recurso solicitado do Authentication. Consulte Configurar um projeto do Firebase para ver a documentação sobre como gerar uma credencial com as permissões apropriadas e usá-la na autenticação dos Admin SDKs.',
    'auth/internal-error': 'O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação. A mensagem de erro incluirá a resposta do servidor de autenticação com informações adicionais. Se o erro persistir, informe o problema ao nosso canal de suporte de Relatório do bug.',
    'auth/invalid-argument': 'Um argumento inválido foi fornecido a um método do Authentication. A mensagem de erro precisa conter informações adicionais.',
    'auth/invalid-claims': 'Os atributos de declaração personalizados fornecidos para setCustomUserClaims() são inválidos.',
    'auth/invalid-continue-uri': 'O URL de confirmação precisa ser uma string de URL válida.',
    'auth/invalid-creation-time': 'O horário da criação precisa ser um string de data UTC válido.',
    'auth/invalid-credential': 'A credencial usada para autenticar os SDKs Admin não pode ser usada para executar a ação desejada. Determinados métodos de autenticação, como createCustomToken() e verifyIdToken(), requerem que o SDK seja inicializado com uma credencial de certificado em oposição a um token de atualização ou uma credencial padrão do aplicativo. Consulte Inicializar o SDK para ver a documentação sobre como autenticar os Admin SDKs com uma credencial de certificado.',
    'auth/invalid-disabled-field': 'O valor fornecido para a propriedade do usuário disabled é inválido. Precisa ser um valor booleano.',
    'auth/invalid-display-name': 'O valor fornecido para a propriedade do usuário displayName é inválido. Precisa ser uma string não vazia.',
    'auth/invalid-dynamic-link-domain': 'O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.',
    'auth/invalid-email': 'O valor fornecido para a propriedade do usuário email é inválido. Precisa ser um endereço de e-mail de string.',
    'auth/invalid-email-verified': 'O valor fornecido para a propriedade do usuário emailVerified é inválido. Precisa ser um valor booleano.',
    'auth/invalid-hash-algorithm': 'O algoritmo de hash precisa corresponder a uma das strings na lista de algoritmos compatíveis.',
    'auth/invalid-hash-block-size': 'O tamanho do bloco de hash precisa ser um número válido.',
    'auth/invalid-hash-derived-key-length': 'O tamanho da chave derivada do hash precisa ser um número válido.',
    'auth/invalid-hash-key': 'A chave de hash precisa ter um buffer de byte válido.',
    'auth/invalid-hash-memory-cost': 'O custo da memória hash precisa ser um número válido.',
    'auth/invalid-hash-parallelization': 'O carregamento em paralelo do hash precisa ser um número válido.',
    'auth/invalid-hash-rounds': 'O arredondamento de hash precisa ser um número válido.',
    'auth/invalid-hash-salt-separator': 'O campo do separador de "salt" do algoritmo de geração de hash precisa ser um buffer de byte válido.',
    'auth/invalid-id-token': 'O token de código informado não é um token de código do Firebase válido.',
    'auth/invalid-last-sign-in-time': 'O último horário de login precisa ser um string de data UTC válido.',
    'auth/invalid-page-token': 'O token de próxima página fornecido em listUsers() é inválido. Precisa ser uma string não vazia válida.',
    'auth/invalid-password': 'O valor fornecido para a propriedade do usuário password é inválido. Precisa ser uma string com pelo menos seis caracteres.',
    'auth/invalid-password-hash': 'O hash da senha precisa ser um buffer de byte válido.',
    'auth/invalid-password-salt': 'O "salt" da senha precisa ser um buffer de byte válido',
    'auth/invalid-phone-number': 'O valor fornecido para phoneNumber é inválido. Ele precisa ser uma string de identificador compatível com o padrão E.164 não vazio.',
    'auth/invalid-photo-url': 'O valor fornecido para a propriedade do usuário photoURL é inválido. Precisa ser um URL de string.',
    'auth/invalid-provider-data': 'O providerData precisa ser uma matriz válida de objetos UserInfo.',
    'auth/invalid-provider-id': 'O providerId precisa ser um string de identificador de provedor compatível válido.',
    'auth/invalid-session-cookie-duration': 'A duração do cookie da sessão precisa ser um número válido em milissegundos entre 5 minutos e 2 semanas.',
    'auth/invalid-uid': 'O uid fornecido precisa ser uma string não vazia com no máximo 128 caracteres.',
    'auth/invalid-user-import': 'O registro do usuário a ser importado é inválido.',
    'auth/maximum-user-count-exceeded': 'O número máximo permitido de usuários a serem importados foi excedido.',
    'auth/missing-android-pkg-name': 'Um nome de pacote Android precisa ser fornecido para a instalação do app Android.',
    'auth/missing-continue-uri': 'Um URL de confirmação válido precisa ser fornecido na solicitação.',
    'auth/missing-hash-algorithm': 'É necessário fornecer o algoritmo de geração de hash e seus parâmetros para importar usuários com hashes de senha.',
    'auth/missing-ios-bundle-id': 'A solicitação está sem o ID do pacote do iOS.',
    'auth/missing-uid': 'Um identificador uid é necessário para a operação atual.',
    'auth/operation-not-allowed': 'O provedor de login fornecido está desativado para o projeto do Firebase. Ative-o na seção Método de login do Console do Firebase.',
    'auth/phone-number-already-exists': 'O phoneNumber fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um phoneNumber exclusivo.',
    'auth/project-not-found': 'Nenhum projeto do Firebase foi encontrado com a credencial usada para inicializar os Admin SDKs. Consulte Configurar um projeto do Firebase para ver a documentação sobre como gerar uma credencial para seu projeto e usá-la na autenticação dos Admin SDKs.',
    'auth/reserved-claims': 'Uma ou mais declarações de usuário personalizadas fornecidas para setCustomUserClaims() são reservadas. Por exemplo, não use as declarações específicas do OIDC, como sub, iat, iss, exp, aud, auth_time etc., como chaves para declarações personalizadas.',
    'auth/session-cookie-expired': 'O cookie da sessão do Firebase fornecido expirou.',
    'auth/session-cookie-revoked': 'O cookie da sessão do Firebase foi revogado.',
    'auth/uid-already-exists': 'O uid fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um uid exclusivo.',
    'auth/unauthorized-continue-uri': 'O domínio da URL de confirmação não está na lista de permissões. Acesse o Console do Firebase para colocar o domínio na lista de permissões.',
    'auth/user-not-found': 'Não há registro de usuário existente correspondente ao identificador fornecido.',

    'storage/unknown': 'Ocorreu um erro desconhecido.',
    'storage/object-not-found': 'Nenhum objeto na referência desejada.',
    'storage/bucket-not-found': 'Nenhum intervalo configurado para o Cloud Storage.',
    'storage/project-not-found': 'Nenhum projeto configurado para o Cloud Storage.',
    'storage/quota-exceeded': 'A cota do intervalo do Cloud Storage foi excedida. Se você estiver no nível gratuito, faça upgrade para um plano pago. Se você estiver em um plano pago, entre em contato com o suporte do Firebase.',
    'storage/unauthenticated': 'O usuário não está autenticado. Faça a autenticação e tente novamente.',
    'storage/unauthorized': 'O usuário não está autorizado a executar a ação desejada. Verifique suas regras de segurança para garantir que estejam corretas.',
    'storage/retry-limit-exceeded': 'O limite máximo de tempo em uma operação (upload, download, exclusão etc.) foi excedido. Envie novamente.',
    'storage/invalid-checksum': 'O arquivo no cliente não corresponde à soma de verificação do arquivo recebido pelo servidor. Envie novamente.',
    'storage/canceled': 'O usuário cancelou a operação.',
    'storage/invalid-event-name': 'Nome inválido do evento fornecido. Precisa ser um dos valores [`running`, `progress`, `pause`]',
    'storage/invalid-url': 'URL inválido fornecido para refFromURL(). Deve estar no formato: gs://bucket/object ou https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=&ltTOKEN>.',
    'storage/invalid-argument': 'O argumento transmitido a put() precisa ser matriz "File", "Blob" ou "UInt8". O argumento transmitido a putString() precisa ser uma string bruta "Base64" ou "Base64URL".',
    'storage/no-default-bucket': 'Nenhum bucket foi definido na propriedade storageBucket da configuração.',
    'storage/cannot-slice-blob': 'Em geral, isso ocorre normalmente quando o arquivo local é alterado (excluído, salvo novamente etc.). Tente fazer o upload novamente após verificar que o arquivo não foi alterado.',
    'storage/server-file-wrong-size': 'O arquivo no cliente não corresponde ao tamanho do arquivo recebido pelo servidor. Envie novamente.',
}