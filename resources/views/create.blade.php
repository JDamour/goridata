@extends('layouts.app')

@section('content')
@include('partials.navbar')
<div>
    <section class="section">
        <div class="container">
            <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child">
                    <div class="tabs is-boxed">
                        <ul>
                            <li>
                                <a href="../home">
                            <span class="icon is-small">
                                <i class="fa fa-bandcamp"></i>
                            </span>
                                    <span>Latest Datasets</span>
                                </a>
                            </li>
                            <li class="is-active">
                                <a href="/dataset/form">
                            <span class="icon is-small">
                                <i class="fa fa-plus-square"></i>
                            </span>
                                    <span>Add New Dataset</span>
                                </a>
                            </li>
                        </ul>
                    </div>
            <div class="box">
                @if ($errors->any())
                    <div class="notification is-danger">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </div>
                @endif
                    @if(Session::has('message'))
                        <div class="notification is-success">
                                {{ Session::get('message') }}
                        </div>
                    @endif
                <form action="{{url('store')}}" method="POST" enctype="multipart/form-data">
                    {{csrf_field()}}
                    <div class="field">
                        <label class="label">Data Name</label>
                        <div class="control">
                            <input class="input is-primary" type="text" name="data_name" value="{{old('data_name')}}" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Topic</label>
                        <div class="control">
                            <div class="select is-primary">
                                <select name="topic">
                                    <option value="">Select Topic</option>
                                    @foreach($topics as $topic)
                                    <option value="{{$topic->id}}">{{$topic->topic_name}}</option>
                                        @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Tag Name</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-primary" type="text" name="tagname" value="{{old('tagname')}}"/>
                                                    <span class="icon is-small is-left">
                                                      <i class="fa fa-tag"></i>
                                                    </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <textarea class="textarea is-primary" name="description" placeholder="Description">
                                {{old('description')}}
                                </textarea>
                        </div>
                    </div>
                    <div id="form"></div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
                <div class="tile is-4 is-vertical is-parent">
                   <div id="leftdata"></div>
                </div>
            </div>
        </div>
    </section>
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        <p>
                            © <?php echo date('Y') ?>, <strong>Goridata</strong> Open data for Developers, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
@endsection
