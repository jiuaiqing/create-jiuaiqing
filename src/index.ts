#!/usr/bin/env node
 
import prompts from "prompts";
import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
const bootstrap = async () => {
    console.log(chalk.cyan("欢迎使用久爱卿开发脚手架"));
    console.log(`
     /\\_____/\\
    /  o   o  \\
   ( ==  ^  == )
    )         (
   (           )
  ( (  )   (  ) )
 (__(__)___(__)__)    
    `);
    const result =  await prompts([
        {
            type: "text",
            name: "projectName",
            message: "请输入您要新建的项目名称:"
        },
        {
            type: "select",
            name: "projectType",
            message: "请选择项目类型:",
            choices: [
                { title: chalk.green("fe"), value: "fe"},
                { title: chalk.blue("be"), value: "be"}
            ],
            initial:0
        }
    ]);
    //管理控制台输入
    //————————————————————————————————————————————————————————————————————————————————————————————————
    const targetPath = path.resolve(process.cwd(), result.projectName);
    let sourcePath:string = "";
    function projectType(projectName:string){
        sourcePath = path.resolve(__dirname, `../template/${projectName}` );
    }
    projectType(result.projectType);
    // Copy files from sourcePath to targetPath
    fs.cpSync(sourcePath, targetPath, { recursive: true });
    // Update package.json
    const packageJsonPath = path.resolve(targetPath, 'package.json');
    const packageJson = require(packageJsonPath);
    packageJson.name = result.projectName;
    // Write the updated package.json back to the file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    // Rename _gitignore to .gitignore
    fs.renameSync(
        path.resolve(targetPath, "_gitignore"),
        path.resolve(targetPath, ".gitignore")
    );
    //————————————————————————————————————————————————————————————————————————————————————————————————
    //最后输出
    console.log(`
    今天也要努力呀!
    项目创建成功，请执行以下命令：
    cd ${result.projectName}
    pnpm i
    pnpm run dev
    `)
};
bootstrap();