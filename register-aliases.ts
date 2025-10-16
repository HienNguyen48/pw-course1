import moduleAlias from 'module-alias';
import path from 'path';

console.log('✅ Module alias loaded');

moduleAlias.addAliases({
  pom: path.resolve(__dirname, './pom'),
});