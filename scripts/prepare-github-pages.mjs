import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const publishDir = join(process.cwd(), 'dist', 'client');
const legacyImage = join(publishDir, 'amanda-watercolor.png');

rmSync(join(process.cwd(), 'dist'), { force: true, recursive: true });
rmSync(join(process.cwd(), '.vinext'), { force: true, recursive: true });

const build = spawnSync('vinext', ['build'], {
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (!existsSync(publishDir)) {
  throw new Error('GitHub Pages publish directory was not generated.');
}

if (existsSync(legacyImage)) {
  rmSync(legacyImage, { force: true });
}

writeFileSync(join(publishDir, 'CNAME'), 'amandapepe.com.br\n');
writeFileSync(join(publishDir, '.nojekyll'), '');

mkdirSync(join(process.cwd(), 'github-pages'), { recursive: true });
rmSync(join(process.cwd(), 'github-pages'), { force: true, recursive: true });
cpSync(publishDir, join(process.cwd(), 'github-pages'), {
  recursive: true,
});
