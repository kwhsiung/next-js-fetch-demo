import PostComponent from './Post'

export default {
  component: PostComponent,
  title: 'Components/Post',
}

const Template = (args) => <PostComponent {...args} />

export const Post = Template.bind({})
Post.args = {
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
}
