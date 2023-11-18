# Jekyll + Tailwind Starter

## Dependencies

This boilerplate uses the following dependencies & plugins:

- [Jekyll](https://jekyllrb.com) (~>4.3.1)
- [TailwindCSS](https://tailwindcss.com) (^3.2.4)
- [NodeJS](https://nodejs.org/)

Detailed dependencies are listed in the [Gemfile](./Gemfile) and [package.json](./package.json)
  
## Local project development

1. If this is the **first time** you're running the project, in the terminal, run
    ```
    $ npm install
    $ bundle install
    ```

2. Run **Jekyll & Tailwind CLI** concurrently:
    ```
    $ npm run dev
    ```

### Troubleshooting

- #### **Jekyll error message related to rexml**
    Run the bundler install command:
    ```
    $ bundle install
    ```
- #### **Something else is wrong**
    First, look for error messages related to your code. 
    
    Next, quit any running processes by killing your terminals and then re-run the command.

    Finally, try clearing your Jekyll cache and rebuilding packages. You may also want to delete your `node_modules` folder before running these commands.
    ```
    $ jekyll clean
    $ bundle install
    $ npm install
    ```