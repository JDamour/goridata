<?php
/**
 * Created by PhpStorm.
 * User: Mpatswenimana
 * Date: 11/10/2017
 * Time: 10:58 AM
 */?>
<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="/assets/images/logo.png" alt="Goridata: an open data sharing for developers" width="112" height="28" />
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
            @if (Auth::check())
            <a class="navbar-item is-active" href="/home">
                Home
            </a>
            @else
            <a class="navbar-item is-active" href="/">
                Home
            </a>
            @endif
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#">
                    Topics
                </a>
                <div class="navbar-dropdown is-boxed">
                    @foreach($categories as $category)
                    <a class="navbar-item" href="{{url("/explore/".$category->topic_name)}}">{{$category->topic_name}}</a>
                    @endforeach
                </div>
            </div>
            <div class="navbar-item search">
                <form action="{{url('/search')}}" method="get">
                <div class="field has-addons">
                    <div class="control has-icons-left">
                        <input class="input is-primary is-small" name="q" type="text" placeholder="Search " />
                        <span class="icon is-small is-left"><i class="fa fa-search"></i></span>
                    </div>
                    <div class="control">
                        <button type="submit" class="button is-small is-primary">
                            Search
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    @if (Auth::check())
        <div class="navbar-end prof">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#">
                    <div class="media-left">
                        <figure class="image is-32x32">
                            <img src={{Auth::user()->avatar}} alt="Image"/>
                        </figure>
                    </div>
                    <span>{{Auth::user()->first_name}}</span>
                </a>
                <div class="navbar-dropdown is-boxed">
                    {{--<a class="navbar-item" href="#">--}}
                        {{--Your profile--}}
                    {{--</a>--}}
                    {{--<a class="navbar-item" href="#">--}}
                        {{--Settings--}}
                    {{--</a>--}}
                    {{--<hr class="navbar-divider" />--}}
                    <a class="navbar-item is-active"  href="{{ url('/logout') }}"
                           onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                            Logout
                        </a>

                        <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </a>
                </div>
            </div>
        </div>
        @endif
</nav>