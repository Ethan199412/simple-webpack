const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const options = require('./webpack.config')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')

const Parser = {
    getAst: path => {
        const content = fs.readFileSync(path, 'utf-8')
        return parser.parse(content, {
            sourceType: 'module'
        })
    },
    getDependencies: (ast, filename) => {
        const dependencies = {}
        traverse(ast, {
            ImportDeclaration: ({ node }) => {
                //console.log('node', node)
                const dirname = path.dirname(filename)
                const filepath = './' + path.join(dirname, node.source.value)
                dependencies[node.source.value] = filepath
                //console.log('t[p0] dependencies', dependencies)
            }
        })
        return dependencies
    },
    getCode: ast => {
        const { code } = transformFromAst(ast, null, {
            presets: ['@babel/preset-env']
        })
        return code
    }
}

class Compiler {
    constructor(options) {
        const { entry, output } = options
        this.entry = entry
        this.output = output
        this.modules = []
    }
    run() {
        const info = this.build(this.entry)
        this.modules.push(info)
        console.log('[p3] modules', this.modules)
        this.modules.forEach(({ dependencies }) => {
            console.log('[p4] dependencies', dependencies)
            if (dependencies) {
                for (const dependency in dependencies) {
                    console.log('[p5] dependency', dependency)
                    this.modules.push(this.build(dependencies[dependency]))
                }
            }
        })
        console.log('[p6] module', this.modules)
        const dependencyGraph = this.modules.reduce(
            (graph, item) => ({
                ...graph,
                [item.filename]: {
                    dependencies: item.dependencies,
                    code: item.code
                }
            }),
            {}
        )
        console.log('[p7] dependencyGraph', dependencyGraph)
    }
    build(filename) {
        //console.log('entry', this.entry)
        const { getAst, getDependencies, getCode } = Parser
        const ast = getAst(filename) // entry index.js
        //console.log('[p0] ast', ast) // ast 一棵树，一个对象
        const dependencies = getDependencies(ast, filename)
        //console.log('[p1] dependencies', dependencies)
        const code = getCode(ast)
        //console.log('[p2] code', code)
        return {
            filename,
            dependencies,
            code
        }
    }
    generate() {

    }
}

new Compiler(options).run()